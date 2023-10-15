<footer class="footer">
  <div class="container footer__container">
    <?php
    $custom_logo__url = wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full');

    if (is_front_page()) {
    ?>
      <a class="logo footer__logo" aria-label="логотип" style="background-image: url(<?php echo $custom_logo__url[0]; ?>);"></a>
    <?php
    } else {
    ?>
      <a href="<?php echo home_url(); ?>" class="logo footer__logo" aria-label="логотип" style="background-image: url(<?php echo $custom_logo__url[0]; ?>);"></a>
    <?php
    }
    ?>
    <?php
        wp_nav_menu( [
          'container'       => false,
          'container_class' => 'nav footer__nav',
          'menu_class'      => 'list-reset nav__list',
          'echo'            => true,
          'fallback_cb'     => 'wp_page_menu',
          'items_wrap'      => '<nav class="nav footer__nav" aria-label="Разделы сайта" title="Разделы сайта"><ul class="%2$s">%3$s</ul></nav>',
          'depth'           => 0,
          'walker'          => '',
        ] );
        ?>
    <small class="footer__copy">ООО «Организация» 2020. Все права защищены</small>
  </div>
</footer>

<div class="modal" data-modal-overlay>
  <div class="modal-window" data-modal-target="search-panel">
    <button type="button" class="btn visually-hidden" data-modal-close></button>
    <form action="<?php echo home_url('/') ?>" id="searchform" method="get" class="form search-panel">
      <input type="search" name="s" id="s" value="<?php echo get_search_query() ?>" autocomplete="off" class="input-reset input search-panel__input" data-items="first" placeholder="Введите что-нибудь..." aria-label="Поле для поиска">
      <button class="btn-reset btn-accent search-panel__btn" aria-label="Найти" id="searchsubmit">
        Найти
        <svg class="btn-accent__icon">
          <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#search"></use>
        </svg>
      </button>
      <ul class="list-reset search-panel__list" data-items-target="first" aria-label="Подходящие посты">
      
      </ul>
    </form>
  </div>
</div>

</div>
<?php wp_footer(); ?>
</body>

</html>