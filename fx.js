//option class with animation methods
class Option{

  constructor(div){
    this.div = div;
    this.div.onmouseenter = this.hover.bind(this);
    this.div.onmouseleave = this.unhover.bind(this);
    this.div.onmouseclick = this.hover.bind(this);
    this.hovered = false;
    this.timer = 0;
    this.anim = null;
  }

  hover(){
    selected = this;
    this.hovered = true;
    this.anim = setInterval(this.myanimate.bind(this), 10);
  }
  unhover(){
    if(this == selected) selected = null;
    this.hovered = false;
  }

  myanimate(){
    if(this.hovered && this.timer < 1){
      this.timer += 0.1;
    }
    else if (!this.hovered && this.timer > 0){
      this.timer -= 0.1;
    }

    this.div.style.marginLeft = String(this.timer*5) + "%";

    if(this.timer < 0 && this.hovered == false){
      clearInterval(this.anim);
      this.anim = null;
    }
  }
}

var content = [];

//main
var option_divs = [];
var options = []; //array of option objects on the website
var contentdiv = document.getElementById("content");
var txtfile;
var selected;

$.get("https://evanhanke.github.io/Personal/descriptions.txt",
    function(data) {
    console.log(data);
});

document.body.onload = function(){


  option_divs = document.getElementsByClassName("option");
  for(i = 0; i < option_divs.length; i++){
    options.push(new Option(option_divs[i]));
  }

}

function readTextFile(file){
    var request = new XMLHttpRequest();
    request.open("GET", file);
    console.log(txtfile);
    request.onreadystatechange = function() {
    if (request.readyState === 0) {
        contentdiv.innterHTML = "loaded";
        console.log(txtfile);
    }
  }
  request.send();
}

var image = document.getElementById("back-image");
onmousemove = function(e){
  var x = e.clientX;
  var y = e.clientY;
  var w = window.innerWidth;
  var h = window.innerHeight;

  var delta_x = (-x + (0.5*w))/(0.5*w);
  var delta_y = (-y + (0.5*h))/(0.5*h);

  var vid = document.getElementById('backvid');
  image.style.left = String(delta_x-10) + "%";
  image.style.top = String(delta_y-10) + "%";

}
