<?php if (!defined('ABSPATH')) exit; get_header();

$all_regionen = get_posts(array(
    'post_type'      => 'regionen',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
));
$current_id = get_the_ID();
$ids        = wp_list_pluck($all_regionen, 'ID');
$idx        = array_search($current_id, $ids, true);
$prev       = ($idx !== false && $idx > 0) ? $all_regionen[$idx - 1] : null;
$next       = ($idx !== false && $idx < count($all_regionen) - 1) ? $all_regionen[$idx + 1] : null;

while (have_posts()) : the_post();
    $farbe  = get_field('region_farbe') ?: '#D4AF37';
    $wappen = get_field('region_wappen');
    $kultur = array_filter(array_map('trim', explode("\n", (string) get_field('region_kultur'))));
?>

<div class="page-region">
    <div class="region-detail-header" style="background: linear-gradient(135deg, <?php echo esc_attr($farbe); ?>20 0%, <?php echo esc_attr($farbe); ?>06 40%, transparent 70%);">
        <div class="container">
            <div class="breadcrumb">
                <a href="<?php echo esc_url(home_url('/die-welt/')); ?>" class="text-muted">Die Welt</a>
                <span class="text-muted"> / </span>
                <span><?php the_title(); ?></span>
            </div>
            <div class="region-detail-header-content">
                <?php if ($wappen) : ?>
                    <img src="<?php echo esc_url($wappen); ?>" alt="Wappen <?php the_title_attribute(); ?>" class="region-detail-wappen">
                <?php endif; ?>
                <div>
                    <span class="section-label" style="display:block;"><?php echo esc_html(get_field('region_schlagwort')); ?></span>
                    <h1 style="margin-top:8px;"><?php the_title(); ?></h1>
                </div>
            </div>
        </div>
    </div>

    <div class="divider-gold"></div>

    <div class="section">
        <div class="container">
            <div class="region-detail-content">
                <main class="region-detail-main">
                    <div class="tags">
                        <?php foreach ($kultur as $k) : ?>
                            <span class="chip active"><?php echo esc_html($k); ?></span>
                        <?php endforeach; ?>
                    </div>

                    <p style="font-size:20px;color:var(--fg-secondary);line-height:1.7;margin-top:32px;"><?php echo esc_html(get_the_excerpt()); ?></p>

                    <div class="divider-gold" style="margin:40px 0;"></div>

                    <div>
                        <h3 style="margin-bottom:20px;">Geschichte &amp; Kultur</h3>
                        <div class="prose"><?php the_content(); ?></div>
                    </div>

                    <?php if (get_field('region_besonderheiten')) : ?>
                    <div class="divider-gold" style="margin:40px 0;"></div>
                    <div class="besonderheiten">
                        <h3>Besonderheiten</h3>
                        <p class="text-secondary" style="margin-top:12px;line-height:1.7;"><?php echo esc_html(get_field('region_besonderheiten')); ?></p>
                    </div>
                    <?php endif; ?>
                </main>

                <aside class="region-detail-aside">
                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:16px;">Schnellübersicht</h4>
                            <dl>
                                <dt class="section-label" style="margin:0;">Region</dt>
                                <dd style="margin:4px 0 16px;color:var(--fg-primary);"><?php the_title(); ?></dd>
                                <dt class="section-label" style="margin:0;">Thema</dt>
                                <dd style="margin:4px 0 16px;color:var(--fg-primary);"><?php echo esc_html(get_field('region_schlagwort')); ?></dd>
                                <dt class="section-label" style="margin:0;">Kultur</dt>
                                <dd style="margin:4px 0 0;display:flex;flex-wrap:wrap;gap:6px;">
                                    <?php foreach ($kultur as $k) : ?>
                                        <span class="badge badge-neutral"><?php echo esc_html($k); ?></span>
                                    <?php endforeach; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="all-regionen">
                        <h4 style="margin-bottom:12px;">Alle Regionen</h4>
                        <?php foreach ($all_regionen as $r) :
                            $r_farbe = get_field('region_farbe', $r->ID) ?: '#D4AF37';
                        ?>
                            <a href="<?php echo esc_url(get_permalink($r)); ?>" class="region-link<?php echo $r->ID === $current_id ? ' is-active' : ''; ?>">
                                <span class="region-link-dot" style="background: <?php echo esc_attr($r_farbe); ?>;"></span>
                                <?php echo esc_html(get_the_title($r)); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </aside>
            </div>

            <div class="region-nav">
                <?php if ($prev) : ?>
                    <a href="<?php echo esc_url(get_permalink($prev)); ?>" class="region-nav-btn">&larr; <?php echo esc_html(get_the_title($prev)); ?></a>
                <?php else : ?>
                    <div></div>
                <?php endif; ?>
                <?php if ($next) : ?>
                    <a href="<?php echo esc_url(get_permalink($next)); ?>" class="region-nav-btn region-nav-btn-right"><?php echo esc_html(get_the_title($next)); ?> &rarr;</a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>

<?php endwhile; get_footer(); ?>
