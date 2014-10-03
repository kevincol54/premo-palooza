// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require flipclock
//= require turbolinks
//= require_tree .

// $(function(){
//   var clock = $('.your-clock').FlipClock(3600, {
//     countdown: true
//   // ... your options here
//   });
// })
$(function(){
var date  = new Date(Date.UTC(2014, 10, 27, 12, 0, 0));
var now   = new Date();
var diff  = date.getTime()/1000 - now.getTime()/1000;

var clock = $('.your-clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
});
})


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

        