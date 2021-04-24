particlesJS("background-particles", {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 790
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": false,
      "speed": 0.5,
      "direction": 'none',
      "random": false,
      "straight": false,
      "out_mode": 'out',
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false },
      "resize": true
    }
  },
  "retina_detect": true,
  "modes": {}
});

particlesJS("line-particles", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 250
      }
    },
    "color": {
      "value": "#4B3820"
    },
    "shape": {
      "type": ["polygon", "image"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": { "nb_sides": 5 },
      "image": {
        "src": "images/rock.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "right",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false },
      "resize": true
    }
  },
  "retina_detect": true,
  "modes": {}
});
