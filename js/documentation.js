var doc = {};

$(function(){
  $('.js-scrollspy').scrollSpy();
  $()
});

$(document).on('click', '.js-lang', function(){
  var language = $(this).data('language');
  doc.set_language(language);
});

$(document).on('change', '.js-dropdown-navigation', function(ev, options){
  var settings = $.extend({do_hash_change: true }, options);

  if(settings.do_hash_change) window.location.hash = $(this).val();
});

$(document).on('scrollspy:change', function(ev, current){
  $('.js-dropdown-navigation')
    .val(current.name)
    .trigger('change', {do_hash_change: false});
});

doc.set_language = function(language){
  $('.toggleable-code, .code-toggle').removeClass('active');
  $('.toggleable-code.lang-'+ language +', .code-toggle.toggle--'+ language).addClass('active');
}
