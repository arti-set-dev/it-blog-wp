<?php
add_action('wp_enqueue_scripts', 'theme_name_scripts');
function theme_name_scripts()
{
  wp_enqueue_style('vendor', get_template_directory_uri() . '/assets/css/vendor.css');
  wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css');
  wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), 'null', ['strategy' => 'defer']);
}

add_theme_support('post-thumbnails'); // картинки для постов
add_theme_support('title-tag'); // вывод заголовков
add_theme_support('custom-logo'); // вывод логотипа
add_theme_support('menus');

// отключить toolbar
add_filter('show_admin_bar', '__return_false');

// Удаление конструкции [...] на конце
add_filter('excerpt_more', fn () => '...');

/// кастомная пагинация
add_filter('paginate_links_output', 'hl_fix_paginate_links');

function hl_fix_paginate_links($html)
{

  $html = preg_replace_callback('/ class=[\'"][^\'"]+[\'"]/', static function ($mm) {

    return strtr($mm[0], [
      'current'      => 'pagination__link--current',
      'prev'         => 'btn-second btn-second--prev',
      'next'         => 'btn-second btn-second--next',
      'page-numbers' => 'pagination__link',
    ]);
  }, $html);

  return $html;
}

// загрузить ещё
function load_more_posts()
{
  $next_page = $_POST['current_page'] + 1;
  $name_cat = $_POST['name_cat'] === 'undefined' ? '' : $_POST['name_cat'];
  $search_value = $_POST['search_value'] === 'undefined' ? '' : $_POST['search_value'];

  $query = new WP_Query([
    'posts_per_page' => 11,
    'paged' => $next_page,
    'category_name' => $name_cat,
    's' => $search_value,
    'post_type' => 'post',
  ]);
  if ($query->have_posts()) :

    ob_start();

    while ($query->have_posts()) : $query->the_post();
      $category = get_the_category();
?>
      <li class="blog-wrapper__item" tabindex="0">
        <article class="post" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
          <a href="<?php echo esc_url(get_category_link($category[0]->term_id)); ?>" class="btn-second"><?php echo $category[0]->cat_name; ?></a>
          <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="data-time"><?php echo get_the_date('d M Y'); ?></time>
          <a href="<?php the_permalink(); ?>" class="post__link">
            <h3 class="title post__title"><?php the_title(); ?></h3>
            <p class="text post__text"><?php echo get_the_excerpt(); ?></p>
          </a>
        </article>
      </li>
    <?php

    endwhile;

    wp_send_json_success(ob_get_clean());

  else :

    wp_send_json_error('No more posts!');

  endif;
}
add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');

// популярные новости
function gt_get_post_view()
{
  $count = get_post_meta(get_the_ID(), 'post_views_count', true);
  if ($count > 0) return $count - 1;
}
function gt_set_post_view()
{
  $key = 'post_views_count';
  $post_id = get_the_ID();
  $count = (int) get_post_meta($post_id, $key, true);
  $count++;
  update_post_meta($post_id, $key, $count);
}
function gt_posts_column_views($columns)
{
  $columns['post_views'] = 'Views';
  return $columns;
}
function gt_posts_custom_column_views($column)
{
  if ($column === 'post_views') {
    echo gt_get_post_view();
  }
}
add_filter('manage_posts_columns', 'gt_posts_column_views');
add_action('manage_posts_custom_column', 'gt_posts_custom_column_views');

// кастомные prev/next
function posts_link_next_class($format)
{
  $format = str_replace('href=', 'class="btn-second news__btn btn-second--next news__btn--next" href=', $format);
  return $format;
}
add_filter('next_post_link', 'posts_link_next_class');

function posts_link_prev_class($format)
{
  $format = str_replace('href=', 'class="btn-second btn-second--prev news__btn" href=', $format);
  return $format;
}
add_filter('previous_post_link', 'posts_link_prev_class');

// Фикс ошибки 404 при пагинации на архивных страницах
function wphelp_custom_pre_get_posts($query)
{
  if ($query->is_main_query() && !$query->is_feed() && !is_admin() && is_category()) {
    $query->set('paged', str_replace('/', '', get_query_var('page')));
  }
}

add_action('pre_get_posts', 'wphelp_custom_pre_get_posts');

function wphelp_custom_request($query_string)
{
  if (isset($query_string['page'])) {
    if ('' != $query_string['page']) {
      if (isset($query_string['name'])) {
        unset($query_string['name']);
      }
    }
  }
  return $query_string;
}

add_filter('request', 'wphelp_custom_request');

// ajax поиск по сайту
add_action("wp_ajax_nopriv_ajax_search", "ajax_search");
add_action("wp_ajax_ajax_search", "ajax_search");
function ajax_search()
{
  $args = array(
    "post_type"      => "post", // Тип записи: post, page, кастомный тип записи
    "post_status"    => "publish",
    "order"          => "DESC",
    "orderby"        => "date",
    "s"              => $_POST["term"],
    "posts_per_page" => -1
  );
  $query = new WP_Query($args);
  if ($query->have_posts()) {
    while ($query->have_posts()) : $query->the_post();
    ?>
      <li class="search-panel__item">
        <article class="article search-panel__post">
          <a href="<?php the_permalink(); ?>" class="search-panel__link">
            <h3 class="title filter-element search-panel__post-title"><?php the_title(); ?></h3>
            <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="data-time search-panel__post-date"><?php echo get_the_date('d M Y'); ?></time>
          </a>
        </article>
      </li>
<?php
    endwhile;
  } else {
    echo "Ничего не найдено ";
  }
  exit;
}

add_filter('upload_mimes', 'svg_upload_allow');

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow($mimes)
{
  $mimes['svg']  = 'image/svg+xml';

  return $mimes;
}

add_filter('wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5);

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type($data, $file, $filename, $mimes, $real_mime = '')
{

  // WP 5.1 +
  if (version_compare($GLOBALS['wp_version'], '5.1.0', '>=')) {
    $dosvg = in_array($real_mime, ['image/svg', 'image/svg+xml']);
  } else {
    $dosvg = ('.svg' === strtolower(substr($filename, -4)));
  }

  // mime тип был обнулен, поправим его
  // а также проверим право пользователя
  if ($dosvg) {

    // разрешим
    if (current_user_can('manage_options')) {

      $data['ext']  = 'svg';
      $data['type'] = 'image/svg+xml';
    }
    // запретим
    else {
      $data['ext']  = false;
      $data['type'] = false;
    }
  }

  return $data;
}

// Отправка формы
add_action('wp_ajax_callback_mail', 'callback_mail');
add_action('wp_ajax_nopriv_callback_mail', 'callback_mail');
function callback_mail()
{
  $to = 'website.development593@gmail.com';
  $c = true;
  // Формирование самого письма
  $subject = "Ваши заявки";
  $body = '';
  foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
      $body .= "
    " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
    }
  }

  $body = "<table style='width: 100%;'>$body</table>";

  $headers = array(
    'From: Me Myself <me@example.net>',
    'content-type: text/html',
    'Cc: John Q Codex <jqc@wordpress.org>',
    'Cc: iluvwp@wordpress.org',
  );

  remove_all_filters('wp_mail_from');
  remove_all_filters('wp_mail_from_name');

  wp_mail($to, $subject, $body, $headers);
  wp_die();
}

// Изменяем атрибут id у тега li
add_filter('nav_menu_item_id', 'filter_menu_item_css_id', 10, 4);
function filter_menu_item_css_id($menu_id, $item, $args, $depth)
{
  return '';
}

// Изменяем атрибут class у тега li
add_filter('nav_menu_css_class', 'filter_nav_menu_css_classes', 10, 4);
function filter_nav_menu_css_classes($classes, $item, $args, $depth)
{
  $classes = [
    'nav__item',
  ];

  return $classes;
}

// ДОбавляем классы ссылкам
add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 4);
function filter_nav_menu_link_attributes($atts, $item, $args, $depth)
{
  $atts['class'] = 'nav__link';

  if ($item->current) {
    $atts['class'] .= ' nav__link--current';
  }

  return $atts;
}
