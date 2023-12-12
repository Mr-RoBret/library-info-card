<?php

/**
 * Plugin Name:       Library Info Card
 * Description:       A block to wrap various info cards on St. Olaf's Library Homepage.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Bret Farley
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       library-info-card
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_library_info_card_block_init() {
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_library_info_card_block_init');

// get styles for slider and dashicons
function library_info_card_enqueue_assets() {
	wp_enqueue_style('library-info-card-plugin-style', plugins_url('./build/style-index.css', __FILE__));
	wp_enqueue_style('dashicons');
}

// add action to get current page id AFTER wp loads, store in global
function library_info_card_front_page_only() {
	$current_page_id = get_the_ID();

	// SET TO WPDEV (blog_id 1 and current_page_id 2) FOR TESTING 
	if (get_current_blog_id() == 1 && $current_page_id == 2) {
		// if (get_current_blog_id() == 279 && $current_page_id == 5) {

		// echo $current_page_id;
		add_action('wp_enqueue_scripts', 'library_info_card_enqueue_assets');
	}
}
add_action('wp', 'library_info_card_front_page_only');
