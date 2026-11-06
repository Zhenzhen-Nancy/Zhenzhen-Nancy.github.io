/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav-toggle');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function setNavExpanded(expanded, restoreFocus) {
  $hlinks.toggleClass('hidden', !expanded);
  $btn.toggleClass('close', expanded)
    .attr('aria-expanded', String(expanded))
    .attr('aria-label', expanded ? 'Close navigation menu' : 'Open navigation menu');
  if (restoreFocus) {
    $btn.trigger('focus');
  }
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      setNavExpanded(false, false);
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (window.screen && window.screen.orientation && typeof window.screen.orientation.addEventListener === 'function') {
  window.screen.orientation.addEventListener('change', updateNav);
}

$btn.on('click', function () {
  setNavExpanded($(this).attr('aria-expanded') !== 'true', false);
});

$btn.on('keydown', function (event) {
  if (event.key === 'ArrowDown' && $hlinks.children().length > 0) {
    event.preventDefault();
    setNavExpanded(true, false);
    $hlinks.find('a').first().trigger('focus');
  }
});

$nav.on('keydown', function (event) {
  if (event.key === 'Escape' && $btn.attr('aria-expanded') === 'true') {
    event.preventDefault();
    setNavExpanded(false, true);
  }
});

$(document).on('click', function (event) {
  if ($btn.attr('aria-expanded') === 'true' && !$nav[0].contains(event.target)) {
    setNavExpanded(false, false);
  }
});

updateNav();
