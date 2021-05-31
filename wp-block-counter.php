<?php
/**
 * Plugin Name:     Counter
 * Description:     Number animation by user interaction.
 * Version:         1.2.0
 * Author:          Innocode
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     innocode-block-counter
 *
 * @package         innocode
 */

function innocode_wp_block_counter_block_init() {
	register_block_type_from_metadata( __DIR__ );
}

add_action( 'init', 'innocode_wp_block_counter_block_init' );
