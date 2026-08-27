<?php
/* Template Name: Die Welt */
if (!defined('ABSPATH')) exit;
get_header();

$regionen_query = new WP_Query(array(
    'post_type'      => 'regionen',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
));
$anzahl = $regionen_query->post_count;
?>

<div class="page-die-welt">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Spielwelt</span>
            <h1 style="margin-top:8px;">Die Welt von Quirin</h1>
            <p class="text-secondary" style="max-width:600px;margin-top:16px;font-size:18px;line-height:1.7;">
                Das Kaiserreich erstreckt sich über <?php echo (int) $anzahl; ?> Präfekturen – jede mit ihrer eigenen Kultur,
                Geschichte und Eigenheit. Erkunde die Welt, die dich erwartet.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="region-grid">
                <?php while ($regionen_query->have_posts()) : $regionen_query->the_post();
                    $farbe   = get_field('region_farbe') ?: '#D4AF37';
                    $wappen  = get_field('region_wappen');
                    $kultur  = array_filter(array_map('trim', explode("\n", (string) get_field('region_kultur'))));
                ?>
                    <a href="<?php the_permalink(); ?>" class="card region-card">
                        <div class="region-header" style="background: linear-gradient(135deg, <?php echo esc_attr($farbe); ?>18, <?php echo esc_attr($farbe); ?>08);">
                            <?php if ($wappen) : ?>
                                <img src="<?php echo esc_url($wappen); ?>" alt="Wappen <?php the_title_attribute(); ?>" class="region-wappen">
                            <?php endif; ?>
                            <div>
                                <div class="region-label"><?php echo esc_html(get_field('region_schlagwort')); ?></div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="region-name"><?php the_title(); ?></h3>
                            <p class="text-secondary" style="font-size:14px;line-height:1.65;margin-top:10px;"><?php echo esc_html(get_the_excerpt()); ?></p>
                            <div class="region-tags">
                                <?php foreach (array_slice($kultur, 0, 3) as $k) : ?>
                                    <span class="badge badge-neutral"><?php echo esc_html($k); ?></span>
                                <?php endforeach; ?>
                            </div>
                            <div class="region-arrow" style="color: <?php echo esc_attr($farbe); ?>;">Erkunden &rarr;</div>
                        </div>
                    </a>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <section class="lore-teaser">
        <div class="divider-gold"></div>
        <div class="container" style="padding:64px 24px;">
            <div class="lore-teaser-inner">
                <div>
                    <span class="section-label">Geschichte &amp; Lore</span>
                    <h2>826 Jahre im Zeitstrahl</h2>
                    <p class="text-secondary" style="margin-top:16px;max-width:480px;">
                        Von der Gründung des Reiches bis zur Gegenwart –
                        entdecke die wichtigsten Ereignisse, Kriege und Dynastien.
                    </p>
                    <a href="<?php echo esc_url(home_url('/geschichte/')); ?>" class="btn btn-outline" style="margin-top:24px;">Zum Zeitstrahl</a>
                </div>
                <div class="lore-teaser-stats">
                    <div class="lore-stat">
                        <strong class="font-display text-gold" style="font-size:48px;"><?php echo (int) $anzahl; ?></strong>
                        <span class="text-muted">Präfekturen</span>
                    </div>
                    <div class="lore-stat">
                        <strong class="font-display text-gold" style="font-size:48px;">826</strong>
                        <span class="text-muted">Jahre Fiktion</span>
                    </div>
                    <div class="lore-stat">
                        <strong class="font-display text-gold" style="font-size:48px;">7</strong>
                        <span class="text-muted">Völker</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider-gold"></div>
    </section>
</div>

<?php get_footer(); ?>
