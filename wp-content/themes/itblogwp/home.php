<?php
/*
Template Name: Home
*/
?>

<?php get_header(); ?>
<main class="main">
  <?php $thumb = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full'); ?>
  <section class="promo" style="background-image: url(<?php echo $thumb['0']; ?>);">
    <h1 class="visually-hidden">it blog</h1>
  </section>

  <section class="blog">
    <div class="container blog__container">
      <h2 class="visually-hidden">Блог по разным категориям</h2>
      <div class="blog-wrapper">
        <?php
        $query_every = new WP_Query([
          'posts_per_page' => 11,
          'paged' => get_query_var('page'),
        ]);

        if ($query_every->have_posts()) {
          $page = max(1, get_query_var('page'));
        ?>
          <ul class="list-reset blog-wrapper__list" data-page="<?= $page; ?>" data-max="<?= $query_every->max_num_pages; ?>">
            <?php
            while ($query_every->have_posts()) {
              $query_every->the_post();
              $category = get_the_category();
            ?>
              <li class="blog-wrapper__item" tabindex="0">
                <article class="post" style="background-image: url(<?php if (the_post_thumbnail_url('full') !== null) the_post_thumbnail_url('full'); ?>);">
                  <a href="<?php echo esc_url(get_category_link($category[0]->term_id)); ?>" class="btn-second"><?php echo $category[0]->cat_name; ?></a>
                  <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="data-time"><?php echo get_the_date('d M Y'); ?></time>
                  <a href="<?php the_permalink(); ?>" class="post__link">
                    <h3 class="title post__title"><?php the_title(); ?></h3>
                    <p class="text post__text"><?php echo get_the_excerpt(); ?></p>
                  </a>
                </article>
              </li>
          <?php
            }
          } else {
            // Постов не найдено
            echo '<span class="blog-wrapper__text">Постов не найдено</span>';
          }

          wp_reset_postdata(); // Сбрасываем $post
          ?>
          </ul>
          <nav class="pagination">
            <ul class="list-reset pagination__list">
              <?php
              $big = 999999999; // уникальное число

              echo paginate_links(array(
                'base'    => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                'current' => max(1, get_query_var('page')),
                'total'   => $query_every->max_num_pages,
                'mid_size'     => 3,
                'prev_text'    => __('Предыдущая'),
                'next_text'    => __('Следующая'),
              ));
              ?>
            </ul>
          </nav>
          <?php // AJAX загрузка постов
          if ($page < $query_every->max_num_pages) { ?>
            <button type="button" class="btn-reset btn-accent load-more blog-wrapper__btn">
              <span>Показать еще</span>
              <svg class="btn-accent__icon">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#refresh"></use>
              </svg>
            </button>
          <?php } ?>
      </div>
      <?php get_sidebar(); ?>

    </div>
  </section>
</main>
<?php get_footer(); ?>