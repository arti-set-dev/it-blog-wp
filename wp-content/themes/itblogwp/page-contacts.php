<?php
/*
Template Name: Contacts
*/
?>

<?php get_header(); ?>
<main class="main">
  <section class="contacts">
    <div class="container contacts__container">
      <h1 class="visually-hidden">Контактная информация</h1>
      <address class="address contact-info contacts__info">
        <b class="contact-info__accent">Контактная информация</b>
        <ul class="list-reset contact-info__list">
          <li class="contact-info__item">
            <a href="tel:<?php $remove = array(" ", "(", ")", ".", "-"); echo str_replace($remove, "", get_field('phone')); ?>" class="text-second contact-info__link" aria-label="Позвонить нам">
              <svg class="text-second__icon text-second__icon--phone">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#phone-call"></use>
              </svg>
              <?php the_field('phone'); ?></a>
          </li>
          <li class="contact-info__item">
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-second contact-info__link">
              <svg class="text-second__icon text-second__icon--geo">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#location-pin"></use>
              </svg>
              <?php the_field('location'); ?></a>
          </li>
        </ul>
        <ul class="list-reset social contact-info__social" title="Наши социальные сети">
          <li class="social__item">
            <a href="<?php the_field('facebook-link'); ?></a>" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="Наша страничка в Фейсбуке">
              <svg class="social__icon">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a href="<?php the_field('vk-link'); ?>" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="Наша страничка во Вконтакте">
              <svg class="social__icon">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a href="<?php the_field('instagram-link'); ?>" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="Наша страничка в Инстаграме">
              <svg class="social__icon">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#instagram"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a href="<?php the_field('twitter-link'); ?>" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="Наша страничка в Твиттере">
              <svg class="social__icon">
                <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#twitter"></use>
              </svg>
            </a>
          </li>
        </ul>
      </address>
      <form action="<?php echo admin_url('admin-ajax.php?action=callback_mail'); ?>" method="post" enctype="multipart/form-data" class="form feedback">
        <h2 class="title feedback__title">Напишите нам</h2>
        <label class="feedback__label">
          <input type="text" name="name" class="input-reset input input--name form__input" placeholder="Имя" aria-label="Поле для ввода имени">
        </label>
        <label class="feedback__label">
          <input type="email" name="email" class="input-reset input input--email form__input" placeholder="E-mail" aria-label="Поле для ввода почты">
        </label>
        <label class="feedback__label">
          <textarea name="message" maxlength="2000" class="input-reset input input--message form__input" placeholder="Сообщение..." aria-label="Поле для ввода сообщения"></textarea>
        </label>
        <button type="submit" class="btn-reset btn-accent btn-accent--submit">
          Отправить
          <svg class="btn-accent__icon">
            <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/sprite.svg#arr-right"></use>
          </svg>
        </button>
      </form>
    </div>
  </section>

</main>
<?php get_footer(); ?>