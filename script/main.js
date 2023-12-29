$(document).ready(function() {
    $(window).on('scroll', function() {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Define the sections you want to add the 'hello' class to
        var auspiciousTxt = $('.day-place')
        var days = $('.days-anim');
        var hours_mins = $('.hours-anim, .mins-anim')
        var secs = $('.secs-anim');
        var fillerSectionMr = $('.mr-anim');
        var fillerSectionMrs = $('.mrs-anim');
        var fillerText = $('.mr-mrs-txt');
        var gallerySection = $('.carousel-anim')
        var mapSection = $('.map-anim');
        var teaserSection = $('.teaser-container');
        var stars = $('.star1, .star2, .star3, .star4, .star5')

        // Check if the sections are in the viewport
        if (isInViewport(auspiciousTxt)) {
            // fillerSectionMr.addClass('w3-animate-opacity');
            auspiciousTxt.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(days)) {
            // fillerSectionMr.addClass('w3-animate-opacity');
            days.addClass('w3-animate-opacity');
        }

        if (isInViewport(hours_mins)) {
            // fillerSectionMr.addClass('w3-animate-opacity');
            hours_mins.addClass('w3-animate-opacity');
        }

        if (isInViewport(secs)) {
            // fillerSectionMr.addClass('w3-animate-opacity');
            secs.addClass('w3-animate-opacity');
        }

        if (isInViewport(fillerSectionMr)) {
            // fillerSectionMr.addClass('w3-animate-opacity');
            fillerSectionMr.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(fillerSectionMrs)) {
            fillerSectionMrs.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(fillerText)) {
            fillerText.addClass('w3-animate-opacity');
        }

        if (isInViewport(gallerySection)) {
            gallerySection.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(mapSection)) {
            mapSection.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(teaserSection)) {
            teaserSection.addClass('w3-animate-bottom', 'w3-animate-opacity');
        }

        if (isInViewport(stars)) {
            stars.addClass('w3-animate-zoom', 'w3-animate-opacity');
        }
    });

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var scrollTop = $(window).scrollTop();

        // Check if the user has scrolled to the top of the page
        if (scrollTop === 0) {
            // Remove 'hello' class from sections
            $(element).removeClass('w3-animate-opacity');
            $(element).removeClass('w3-animate-left');
            $(element).removeClass('w3-animate-right');
            $(element).removeClass('w3-animate-bottom');
            $(element).removeClass('w3-animate-zoom');
 
        }

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Trigger scroll event on page load to check initial state
    $(window).trigger('scroll');
});