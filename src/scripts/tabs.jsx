$(document).ready(function(){
  $('ul.tabs').each(function(){


    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    let $active = $(this).find('a')
    let $content = $(this).find('a')
    let $links = $(this).find('a')

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.parent('li').addClass('active-tab');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Prevent the anchor's default click action
      e.preventDefault();
      // Make the old tab inactive.
      $active.parent('li').removeClass('active-tab');
      $content.css('display', 'none');

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.parent('li').addClass('active-tab');
      $content.fadeIn('slow').css('display', 'flex');
    });
  });

  $('ul.events-tabs').each(function(){

    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    let $active = $(this).find('a');
    let $content = $(this).find('a')
    let $links = $(this).find('a')

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.parent('li').addClass('active-tab');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.parent('li').removeClass('active-tab');
      $content.css('display', 'none');

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.parent('li').addClass('active-tab');
      $content.fadeIn('slow');

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });
});