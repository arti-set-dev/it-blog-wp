<?php
/*
Template Name: Category
*/
?>

<?php get_header();
$category = get_the_category();
?>
<main class="main">
  <section class="promo">
    <h1 class="title promo__title"><?php echo $category[0]->cat_name; ?></h1>
  </section>

  <section class="blog">
    <div class="container blog__container">
      <h2 class="visually-hidden">Блог по разным категориям</h2>
      <div class="blog-wrapper">
        <?php
        if (have_posts()) {
          global $query_string;
          query_posts($query_string . '&posts_per_page=11');
          $page = max(1, get_query_var('paged'));
          ?>
          <ul class="list-reset blog-wrapper__list" data-page="<?= $page; ?>" data-max="<?= $wp_query->max_num_pages; ?>" data-name='<?= $category[0]->cat_name; ?>'>
            <?php
            while (have_posts()) {
              the_post();
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
            }
          } else {
            echo '<span class="blog-wrapper__text">Постов не найдено</span>';
          }
          ?>
          </ul>
          <nav class="pagination">
            <ul class="list-reset pagination__list">
              <?php
              echo paginate_links(
                $args = array(
                  'mid_size'     => 3,
                  'prev_text'    => __('Предыдущая'),
                  'next_text'    => __('Следующая'),
                )
              );
              ?>
            </ul>
          </nav>
          <?php // AJAX загрузка постов
          if ($page < $wp_query->max_num_pages) { ?>
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