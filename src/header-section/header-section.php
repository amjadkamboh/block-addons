<?php
/**
 * Holds all the functions, that displays the block frontend
*/
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

register_block_type( 'wpm-captain-block/hero-block-list', [ 'render_callback' => 'hero_block_list_output' ] );

/**
 * Renders the block front end HTML
 *
 * @param $attributes
 *
 * @return string
 */
function hero_block_list_output( $attributes ) {
	$output_safe = '';

    //var_dump($attributes);
    
	$heroTitle = $attributes['heroTitle'];
	$heroDes = $attributes['heroDes'];
	$heroCta = $attributes['heroCta'];
	$heroLink = $attributes['heroLink'];
    $heroCtaLink = $attributes['heroCtaLink'] ;
    $mediaId = $attributes['mediaId'] ;
    $mediaUrl = $attributes['mediaUrl'];
    

    $output_safe .= '<div class="theme-section-full alignfull">';
    $output_safe .= '<div class="Hero-outter">';
    $output_safe .= '<div class="Hero-1section">';
    $output_safe .= '<div class="col-2">';
    $output_safe .= '<div class="col-inner-2 txt-1">';
    $output_safe .= '<h1>'. $heroTitle .'</h1>';
    $output_safe .= '<p>'. $heroDes .'</p>';
    $output_safe .= '<a class="wp-block-button__link" href="'. $heroCtaLink .'">'. $heroLink .'</a>';
    $output_safe .= '</div>';
    $output_safe .= '<div class="col-inner-2 img-1">';
    $output_safe .= '<img src="'. $mediaUrl .'" alt="'. $heroTitle .'" />';
    $output_safe .= '</div>';
    $output_safe .= '</div>';
    $output_safe .= '</div>';
    $output_safe .= '</div>';
    $output_safe .= '</div>';

	return $output_safe;

}