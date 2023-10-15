<?php
/*
Template Name: Single
*/
?>

<?php get_header(); 
$category = get_the_category();

$pred_post = get_previous_post();

gt_set_post_view();
?>
<main class="main">
  <div class="news">
    <div class="container news__container">
      <div class="news__promo" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);"></div>
      <div class="news__wrapper">
        <article class="article news__post">
          <div class="news__meta">
            <a href="<?php echo esc_url(get_category_link($category[0]->term_id)); ?>" class="btn-second"><?php echo $category[0]->cat_name; ?></a>
            <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="data-time"><?php echo get_the_date('d M Y'); ?></time>
          </div>
          <div class="news__content" tabindex="0">
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
          </div>
          <div class="news__btns">
            <?php previous_post_link('%link', 'Предыдущая новость'); ?>
            <?php next_post_link('%link', 'Следующая новость'); ?>
          </div>
        </article>
        <?php get_sidebar(); ?>

      </div>
    </div>
  </div>

</main>
<?php get_footer(); ?>