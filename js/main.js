function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function getSeen (first) {
  var stored = JSON.parse(localStorage.getItem("seenPlanet"));
  if (first && stored !== true) {
    localStorage.removeItem("seenPlanet");
    return false;
  } else return stored;
}

function getDim (type) {
  return window['inner' + type] || document.documentElement['client' + type] || document.body['client' + type];
}

var fallingPlanet = anime({
  targets: ".right-planet .planetoid",
  translateX: [
    { value: 50, duration: 3000, delay: 1000 },
    { value: 100, duration: 4000, delay: 1500 }
  ],
  translateY: [
    { value: 50, duration: 1000, easing: "easeInElastic(1, 1)" },
    { value: 40, duration: 500 },
    { value: getDim('Height') || 2000, duration: 7500, easing: "linear" }
  ],
  rotate: {
    value: 450,
    duration: 5000,
    delay: 750,
    easing: "easeOutQuart"
  },
  easing: "easeOutElastic(1, 2)",
  autoplay: false,
  loop: false,
  complete: function () {
    document.querySelector(".right-planet .planetoid").style.display = "none";
  }
});

var shakePlanet = anime({
  targets: ".right-planet .planet",
  translateX: [-1, 1],
  translateY: [-1, 1],
  duration: 100,
  direction: 'alternate',
  easing: "linear",
  autoplay: false,
  loop: 10
});

var flyingCar = anime({
  targets: ".flying-car-container",
  translateX: [-50, getDim('Width') || 1500],
  translateY: [200, -50],
  duration: 25000,
  easing: "linear",
  loop: true,
  delay: 20000
});

ready(function(){
  var hasSeenFirst = getSeen(true);

  if (hasSeenFirst !== true) document.querySelector(".right-planet .planetoid").style.display = "inline";

  document.querySelector(".right-planet").onclick = function () {
    shakePlanet.play();

    if (hasSeenFirst !== true) {
      var hasSeen = getSeen();
      if (hasSeen !== true) {
        if (!isNaN(hasSeen) && hasSeen >= 4) {
          fallingPlanet.play();
          localStorage.setItem("seenPlanet", "true");
        } else {
          localStorage.setItem("seenPlanet", JSON.stringify(hasSeen ? hasSeen + 1 : 1));
        }
      }
    }
  };

  var flyingCarEl = document.querySelector(".flying-car-container");
  var flyingCarTooltip = document.querySelector(".flying-car-container span");
  flyingCarEl.onmouseenter = function () {
    flyingCar.pause();
    flyingCarTooltip.style.display = "inline";
  };
  flyingCarEl.onmouseleave = function () {
    flyingCar.play();
    flyingCarTooltip.style.display = "none";
  }
})
