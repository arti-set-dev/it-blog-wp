<?php
/*
Template Name: 404
*/
?>

<?php get_header(); ?>
<main class="main">
  <section class="not-found">
    <h1 class="visually-hidden">не можем найти данные согласно запросу</h1>
    <div class="container not-found__container">
      <figure class="not-found__figure" tabindex="0" aria-label="Результатов не найдено">
        <picture class="picture not-found__picture">
          <source srcset="<?php bloginfo('template_url'); ?>/assets/img/404.avif" type="image/avif">
          <source srcset="<?php bloginfo('template_url'); ?>/assets/img/404.webp" type="image/webp">
          <img loading="lazy" src="<?php bloginfo('template_url'); ?>/assets/img/404.jpg" class="image not-found__image" width="326" height="326" alt="" aria-hidden="true">
        </picture>
        <figcaption class="not-found__figcaption" aria-hidden="true">Что-то пошло не так…</figcaption>
      </figure>
      <a href="<?php echo home_url(); ?>" class="btn-second">
        <svg class="btn-second__icon">
          <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#arr-left-2"></use>
        </svg>
        Вернуться назад
      </a>
    </div>
  </section>

</main>
<?php get_footer(); ?>