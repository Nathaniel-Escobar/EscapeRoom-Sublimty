console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/arrowimg.png",
  "images/background.png",
  "images/Backrooms lvl37.png",
  "images/imagesenhanced.jpg",
  "images/masterlock.png",
  "images/note.png",
  "images/questionmark.png",
  "images/Sewergrate.png",
  "images/skelydude.png",
  "images/textbox.png",
  "images/threeeee.png",
  "images/hand.png",
  "images/knife.png",
  "images/sunshine.jpeg",
  "images/ball.png",
  "images/chart.png",
  "images/numberline.png",
  "images/LEBRON.jpg",
  "images/Cypher puzzle.png"
);
