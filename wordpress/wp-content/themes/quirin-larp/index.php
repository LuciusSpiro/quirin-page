<?php if (!defined('ABSPATH')) exit; get_header(); ?>

<div class="generic-page">
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article <?php post_class(); ?>>
                <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                <div class="content prose"><?php the_excerpt(); ?></div>
            </article>
            <div class="divider-gold" style="margin: 40px 0;"></div>
        <?php endwhile; else : ?>
            <p class="text-muted">Keine Inhalte gefunden.</p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
