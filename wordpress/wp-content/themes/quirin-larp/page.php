<?php if (!defined('ABSPATH')) exit; get_header(); ?>

<div class="generic-page">
    <div class="container">
        <?php while (have_posts()) : the_post(); ?>
            <span class="section-label"><?php bloginfo('name'); ?></span>
            <h1><?php the_title(); ?></h1>
            <div class="content prose">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>
