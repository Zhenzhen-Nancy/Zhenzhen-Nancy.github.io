/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

/*jslint es6 */
'use strict';

// Constants for CDNs
const PLOTLY_URL = "https://cdn.jsdelivr.net/npm/plotly.js@3.6.0/dist/plotly.min.js";
const MERMAID_URL = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

// Keep an explicit choice working even when browser storage is unavailable.
let themePreference = null;

// Determine the computed theme, which can be "dark" or "light".
function determineComputedTheme() {
  if (themePreference) {
    return themePreference;
  }
  try {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
  } catch (error) {
    // Storage can be disabled by browser privacy settings.
  }
  return 'light';
}

// Set the theme on page load or when explicitly called. Without an argument the
// theme is the stored preference or, failing that, the site's light default.
function setTheme(theme) {
  const use_theme = theme || determineComputedTheme();

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
  const themeAction = use_theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  $('#theme-toggle-control').attr('aria-label', themeAction).attr('title', themeAction);
}

// Toggle the theme manually
function toggleTheme() {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  themePreference = new_theme;
  try {
    window.localStorage.setItem('theme', new_theme);
  } catch (error) {
    // The in-memory preference still applies for this visit.
  }
  setTheme(new_theme);
  redrawPlotly();
}

// Defer the loading of Mermaid to only if there is a field on the page to be rendered
let mermaidElements = document.querySelectorAll("pre>code.language-mermaid");
if (mermaidElements.length > 0) {
  document.addEventListener("readystatechange", function() {
    // Append the Mermaid module to the DOM
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import mermaid from '${MERMAID_URL}';
      mermaid.initialize({startOnLoad:true, theme:'default'});
      await mermaid.run({querySelector:'code.language-mermaid'});
    `;
    document.body.appendChild(moduleScript);
  });
}

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is
// actually present on the page.
//
// NOTE that plotlyDarkLayout and plotlyLightLayout will be exposed in the minimized file
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", function() {
    // Return if not ready
    if (document.readyState !== "complete") {
      return;
    }

    // Prepare to load Plotly from the CDN
    const script = document.createElement('script');
    script.src = PLOTLY_URL;
    script.async = true;

    // Once loaded, update the page elements to work with it
    script.onload = function() {
      plotlyElements.forEach(function(elem) {
        // Parse the Plotly JSON data and hide it
        let jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }

    // Add the script to the document
    document.head.appendChild(script);
  });
}

function redrawPlotly() {
  plotlyElements.forEach(function(elem) {
    // Parse the Plotly JSON data
    let jsonData = JSON.parse(elem.textContent);

    // Get the Plotly node
    let chartElement = $(elem).parent().next().get(0);

    // Set the theme for the plot and render it
    const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
    if (jsonData.layout) {
      jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
    } else {
      jsonData.layout = { template: theme };
    }
    Plotly.react(chartElement, jsonData.data, jsonData.layout);
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // Use the light default unless the visitor explicitly chose a theme.
  setTheme();

  // This anchor has button semantics without inheriting greedy-menu button CSS.
  $('#theme-toggle-control').on('click', function (event) {
    event.preventDefault();
    toggleTheme();
  }).on('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!event.repeat) {
        toggleTheme();
      }
    }
  });

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // Use the actual button visibility so the contact menu follows the CSS breakpoint.
  const $contactButton = $('#author-contact-toggle');
  const $contactLinks = $('#author-contact-links');
  const $contactWrapper = $contactButton.closest('.author__urls-wrapper');
  let contactIsCompact = null;

  function setContactExpanded(expanded, restoreFocus) {
    $contactLinks.stop(true, true).toggle(expanded);
    $contactButton.toggleClass('open', expanded).attr('aria-expanded', String(expanded));
    if (restoreFocus) {
      $contactButton.trigger('focus');
    }
  }

  function syncContactMenu() {
    const compact = $contactButton.is(':visible');
    if (compact !== contactIsCompact) {
      setContactExpanded(!compact, false);
      if (!compact) {
        $contactLinks.css('display', '');
      }
      contactIsCompact = compact;
    }
  }

  $contactButton.on('click', function () {
    setContactExpanded($(this).attr('aria-expanded') !== 'true', false);
  });
  $contactWrapper.on('keydown', function (event) {
    if (event.key === 'Escape' && contactIsCompact && $contactButton.attr('aria-expanded') === 'true') {
      event.preventDefault();
      setContactExpanded(false, true);
    }
  });
  $(document).on('click', function (event) {
    if (contactIsCompact && $contactButton.attr('aria-expanded') === 'true' && !$contactWrapper[0].contains(event.target)) {
      setContactExpanded(false, false);
    }
  });
  $(window).on('resize', syncContactMenu);
  syncContactMenu();

});
