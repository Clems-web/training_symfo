import VanillaTilt from "vanilla-tilt";

let presentation = document.querySelector(".js-tilt");
VanillaTilt.init(presentation);
presentation.addEventListener("tiltChange", callback);