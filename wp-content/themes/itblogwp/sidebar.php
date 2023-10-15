<?php
/*
Template Name: Sidebar
*/
?>

<aside class="popular-news">
  <h2 class="title popular-news__title">Популярные новости</h2>
  <ul class="list-reset popular-news__list" aria-label="Популярные новости">
    <?php
    $popular_query = new WP_Query([
      'posts_per_page' => 3,
      'meta_key' => 'post_views_count',
      'orderby' => 'meta_value_num',
    ]);

    if ($popular_query->have_posts()) {
      while ($popular_query->have_posts()) {
        $popular_query->the_post();
    ?>
        <li class="popular-news__item">
          <article class="article popular-news__post">
            <a href="<?php the_permalink(); ?>" class="popular-news__link">
              <h3 class="title popular-news__post-title"><?php the_title(); ?></h3>
              <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="data-time popular-news__date"><?php echo get_the_date('d M Y'); ?></time>
            </a>
          </article>
        </li>
    <?php
      }
    } else {
      echo '<span>Популярных постов пока нет</span>';
    }

    wp_reset_postdata(); // Сбрасываем $post
    ?>
  </ul>
  <form action="<?php echo admin_url('admin-ajax.php?action=callback_mail'); ?>" method="post" enctype="multipart/form-data" class="form subscription">
    <h2 class="title subscription__title">Подписка на рассылку</h2>
    <input type="email" name="email" class="input-reset input input--email subscription__input" placeholder="Email@gmail.com" aria-label="Поле для ввода почты">
    <button class="btn-reset btn-accent subscription__btn">
      Подписаться
      <svg class="btn-accent__icon">
        <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#arr-right"></use>
      </svg>
    </button>
  </form>
</aside>