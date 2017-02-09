'use strict';

var banner = document.getElementById('banner'),
    w = banner.offsetWidth,
    h = banner.offsetHeight,
    dur = 0.5,
    times = 1,
    timeline;

// setup initial element states
function cssInit() {
  TweenMax.set('#', {xPercent:-50, yPercent:-50});
};
cssInit();

TweenMax.defaultEase = Power2.easeOut;

// animation timeline
function firstTl() {
  var tl = new TimelineMax()
  .from(element, 1, {vars, ease: Power3.easeInOut})
  .to(element, 1, {vars, ease: Power3.easeInOut})
  return tl;
}

function secondTl() {
  var tl = new TimelineMax()
  .from(element, 1, {vars, ease: Power3.easeInOut})
  .to(element, 1, {vars, ease: Power3.easeInOut})
  return tl;
}
   
function masterTl() {
  timeline = new TimelineMax()
  .add( firstTl() )
  .add( secondTl() )
  return timeline;
}

// fire animations after window is loaded
window.onload = masterTl();


// function to run on complete of timeline to pause animation after x ammount of times
function stopAnim() {
    if (times >= 2) {
      timeline.pause();
    }
    times++;
    console.log("times it ran: " + times);
}