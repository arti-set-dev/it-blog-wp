<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>" class="page">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="<?php wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full'); ?>" type="image/x-icon">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="#111111">
  <?php wp_head(); ?>
  <meta name="format-detection" content="telephone=no">
  <meta name="description" content="it blog">
  <meta name="keywords" content="it blog, it, blog">
  <meta name="Author" content="">
  <meta name="Copyright" content="">
  <meta name="Address" content="">
  <meta property="og:locale" content="">
  <meta property="og:type" content="">
  <meta property="og:title" content="it blog">
  <meta property="og:description" content="блок по it тематике">
  <meta property="og:image" content="">
  <meta property="og:url" content="">
  <meta property="og:site_name" content="it blog">
  <meta name="twitter:card" content="">
  <meta name="twitter:site" content="">
  <meta name="twitter:title" content="it blog">
  <meta name="twitter:description" content="блок по it тематике">
  <meta name="twitter:image" content="">
</head>

<body class="page__body">
  <div class="site-container">
    <header class="header">
      <div class="container header__container">
        <?php
        $custom_logo__url = wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full');

        if (is_front_page()) {
        ?>
          <a class="logo" aria-label="логотип" style="background-image: url(<?php echo $custom_logo__url[0]; ?>);"></a>
        <?php
        } else {
        ?>
          <a href="<?php echo home_url(); ?>" class="logo" aria-label="логотип" style="background-image: url(<?php echo $custom_logo__url[0]; ?>);"></a>
        <?php
        }
        ?>
        <?php
        wp_nav_menu( [
          'container'       => false,
          'container_class' => 'nav header__nav',
          'menu_class'      => 'list-reset nav__list header__list',
          'echo'            => true,
          'fallback_cb'     => 'wp_page_menu',
          'items_wrap'      => '<nav class="nav header__nav" aria-label="Меню блога" title="Меню блога" data-menu><ul class="%2$s">%3$s</ul></nav>',
          'depth'           => 0,
          'walker'          => '',
        ] );
        ?>
        <button type="button" class="btn-reset nav__link header__search" data-modal="search-panel">
          <svg class="header__search-icon">
            <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#search"></use>
          </svg>
          Поиск
        </button>
        <div class="overlay" data-menu-overlay></div>
        <a href="tel:<?php $remove = array(" ", "(", ")", ".", "-");
                      echo str_replace($remove, "", get_field('phone', 105)); ?>" class="text-second phone header__phone" aria-label="Позвонить">
          <svg class="text-second__icon text-second__icon--phone">
            <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#phone-call"></use>
          </svg>
          <?php the_field('phone', 105); ?>
        </a>
        <button class="burger" aria-label="Открыть меню" aria-expanded="false" data-burger>
          <span class="burger__line"></span>
        </button>
      </div>
    </header>