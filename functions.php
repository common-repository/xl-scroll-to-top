<?php

/**
 * Plugin Name: XL Scroll To Top
 * Plugin URI: http://www.xltheme.com/plugin/xl_scrolltotop
 * Description: This is a shortcode plugin.
 * Author: Khandaker Ikrama
 * Author URI: http://www.ikrama.info/
 * Version: 1.1
 */

function xl_scroll_to_top() {
    wp_enqueue_script( 'xl_plugins_js', plugins_url( '/js/plugins.js', __FILE__ ), array('jquery'), 1.0, true);
    wp_enqueue_script( 'xl_custom_js', plugins_url( '/js/custom.js', __FILE__ ), array(), 1.0, true);
    wp_enqueue_style( 'xl_plugins_css', plugins_url( '/css/plugins.css', __FILE__ ));
    wp_enqueue_style( 'xl_custom_css', plugins_url( '/css/custom.css', __FILE__ ));
}

add_action('init','xl_scroll_to_top');

