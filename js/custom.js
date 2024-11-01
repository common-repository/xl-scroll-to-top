var jq = jQuery.noConflict();
(function (jq) {
    'use strict';

    try {
        jq.scrollUp({
            scrollName: 'scrollTop', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade',
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    } catch (err) {
        console.log('scrollTop is not found')
    }

})(jq);