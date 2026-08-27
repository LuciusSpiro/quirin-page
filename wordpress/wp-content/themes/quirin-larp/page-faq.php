<?php
/* Template Name: FAQ */
if (!defined('ABSPATH')) exit;
get_header();

$shop_url = class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/');

$faq_query = new WP_Query(array(
    'post_type'      => 'faq_eintrag',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
));
?>

<div class="page-faq">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Einsteiger</span>
            <h1 style="margin-top:8px;">Häufige Fragen</h1>
            <p class="text-secondary" style="max-width:520px;margin-top:16px;font-size:18px;line-height:1.7;">
                Alles, was du vor deinem ersten Event wissen musst.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="faq-layout">
                <div class="accordion" data-faq-accordion>
                    <?php while ($faq_query->have_posts()) : $faq_query->the_post(); ?>
                        <div class="item">
                            <button class="item-trigger" data-faq-trigger aria-expanded="false">
                                <span><?php the_title(); ?></span>
                                <span class="item-icon">+</span>
                            </button>
                            <div class="item-body">
                                <p class="text-secondary" style="line-height:1.75;"><?php the_content(); ?></p>
                            </div>
                        </div>
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>

                <aside class="sidebar">
                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:16px;">Noch Fragen?</h4>
                            <p class="text-secondary" style="font-size:14px;line-height:1.7;margin-bottom:20px;">
                                Falls du keine Antwort auf deine Frage findest, schreib uns gerne direkt an.
                            </p>
                            <a href="<?php echo esc_url(home_url('/kontakt/')); ?>" class="btn btn-primary" style="width:100%;justify-content:center;">Kontakt aufnehmen</a>
                            <a href="mailto:info@quirin-larp.de" class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:8px;">info@quirin-larp.de</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:12px;">Nächster Schritt</h4>
                            <p class="text-secondary" style="font-size:14px;margin-bottom:16px;">Bereit einzusteigen? Melde dich für ein Event an.</p>
                            <a href="<?php echo esc_url($shop_url); ?>" class="btn btn-outline" style="width:100%;justify-content:center;">Zu den Events &rarr;</a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
