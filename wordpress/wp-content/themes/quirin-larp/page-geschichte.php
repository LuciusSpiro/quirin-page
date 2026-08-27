<?php
/* Template Name: Geschichte */
if (!defined('ABSPATH')) exit;
get_header();

function quirin_format_jahr($j) {
    $j = (int) $j;
    if ($j === 0) return 'Jahr 0 – Reichsgründung';
    if ($j < 0) return abs($j) . ' v.d.B.';
    return 'Jahr ' . $j . ' n.d.B.';
}

$typen = get_terms(array('taxonomy' => 'ereignis_typ', 'hide_empty' => false));

$ereignisse_query = new WP_Query(array(
    'post_type'      => 'zeitstrahl_ereignis',
    'posts_per_page' => -1,
    'meta_key'       => 'ereignis_jahr',
    'orderby'        => 'meta_value_num',
    'order'          => 'ASC',
));
?>

<div class="page-geschichte">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Zeitstrahl</span>
            <h1 style="margin-top:8px;">Geschichte des Reiches</h1>
            <p class="text-secondary" style="max-width:560px;margin-top:16px;font-size:18px;line-height:1.7;">
                826 Jahre Fiktion – von der Befreiung aus den Chaos-Herden
                bis zur lebendigen Gegenwart des Kaiserreichs Quirin im Jahr 826.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="filters" data-timeline-filters>
                <button class="chip active" data-filter="alle">Alle Ereignisse</button>
                <?php foreach ($typen as $t) :
                    $farbe = get_term_meta($t->term_id, 'farbe', true) ?: '#D4AF37';
                ?>
                    <button class="chip" data-filter="<?php echo esc_attr($t->slug); ?>" style="--chip-color: <?php echo esc_attr($farbe); ?>;">
                        <span class="chip-dot" style="background: <?php echo esc_attr($farbe); ?>;"></span>
                        <?php echo esc_html($t->name); ?>
                    </button>
                <?php endforeach; ?>
            </div>

            <div class="timeline" data-timeline>
                <div class="timeline-axis"></div>

                <?php $i = 0; while ($ereignisse_query->have_posts()) : $ereignisse_query->the_post();
                    $terms = get_the_terms(get_the_ID(), 'ereignis_typ');
                    $term  = $terms && !is_wp_error($terms) ? $terms[0] : null;
                    $farbe = $term ? (get_term_meta($term->term_id, 'farbe', true) ?: '#D4AF37') : '#D4AF37';
                    $seite = $i % 2 === 0 ? 'links' : 'rechts';
                ?>
                    <div class="ereignis <?php echo $seite; ?>" data-typ="<?php echo esc_attr($term ? $term->slug : ''); ?>">
                        <div class="marker" style="border-color: <?php echo esc_attr($farbe); ?>; box-shadow: 0 0 12px <?php echo esc_attr($farbe); ?>40;"></div>
                        <div class="card ereignis-card" data-ereignis-toggle tabindex="0" role="button">
                            <div class="ereignis-header">
                                <div>
                                    <span class="ereignis-jahr" style="color: <?php echo esc_attr($farbe); ?>;"><?php echo esc_html(quirin_format_jahr(get_field('ereignis_jahr'))); ?></span>
                                    <h4 style="margin-top:4px;"><?php the_title(); ?></h4>
                                </div>
                                <?php if ($term) : ?>
                                    <span class="badge" style="background: <?php echo esc_attr($farbe); ?>18; color: <?php echo esc_attr($farbe); ?>; border: 1px solid <?php echo esc_attr($farbe); ?>40; flex-shrink:0;"><?php echo esc_html($term->name); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="ereignis-body">
                                <p class="text-secondary" style="font-size:14px;line-height:1.7;"><?php the_content(); ?></p>
                            </div>
                            <div class="expand-hint">
                                <span class="hint-closed">&#9660; Mehr lesen</span>
                                <span class="hint-open">&#9650; Einklappen</span>
                            </div>
                        </div>
                    </div>
                <?php $i++; endwhile; wp_reset_postdata(); ?>
            </div>

            <div class="timeline-empty" style="display:none;text-align:center;padding:64px 0;color:var(--fg-muted);">
                Keine Ereignisse für diesen Filter.
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
