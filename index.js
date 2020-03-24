if (screen.width > 1000) {
  document.addEventListener("mousemove", function(e) {
    var body = document.querySelector("body");
    var heart = document.createElement("span");
    heart.setAttribute("class", "heart");
    var x = e.offsetX;
    var y = e.offsetY;
    var size = Math.random() * 100;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.width = 20 + size + "px";
    heart.style.height = 20 + size + "px";
    body.appendChild(heart);
    setTimeout(function() {
      heart.remove();
    }, 1000);
  });
} else {
  document.addEventListener("touchmove", function(e) {
    var body = document.querySelector("body");
    var heart = document.createElement("span");
    heart.setAttribute("class", "heart");
    var x = e.offsetX;
    var y = e.offsetY;
    var size = Math.random() * 10;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    body.appendChild(heart);
    setTimeout(function() {
      heart.remove();
    }, 1000);
  });
}
