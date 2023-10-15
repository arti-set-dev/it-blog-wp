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