<?php
/**
 * Plugin Name:       Counter Block
 * Description:       Number animation by user interaction.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.3.3
 * Author:            Innocode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       innocode-block-counter
 *
 * @package           innocode
 */

function innocode_block_counter_block_init() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'innocode_block_counter_block_init' );
