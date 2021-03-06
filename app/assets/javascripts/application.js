// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require bootstrap

function iconChange(x) {
  $(".bars").toggleClass("change");
  $("#hamburger-text").html() === "Menu" ? $("#hamburger-text").html("Close") : $("#hamburger-text").html("Menu");
};

$(document).ready(function(){
 var place = 0;
  $("#lang-label-0").show().animate({opacity:1},500);
  setInterval(function(){
    $("#lang-label-"+place).animate({opacity:0},500).hide();
    place === 6 ? place = 0 : place++;
    $("#lang-label-"+place).show().animate({opacity:1},500);
  },1500);
});