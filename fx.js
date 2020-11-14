//option class with animation methods
class Option{

  constructor(div, desc, link){
    this.div = div;
    this.div.onmouseenter = this.hover.bind(this);
    this.div.onmouseleave = this.unhover.bind(this);
    this.div.onmouseclick = this.hover.bind(this);
    this.div.onmouseclick = this.click.bind(this);
    this.hovered = false;
    this.timer = 0;
    this.anim = null;
    this.desc = desc;
    this.link = link;
  }

  click(){
    window.open(this.link, '_blank');
  }

  hover(){
    selected = this;
    contentdiv.textContent = this.desc;
    this.hovered = true;
    this.anim = setInterval(this.myanimate.bind(this), 10);
  }
  unhover(){
    if(this == selected){
      contentdiv.textContent = descs[0];
      selected = null;
    }
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
var option_div = null;
var options = []; //array of option objects on the website
var contentdiv = document.getElementById("content");
var descs;
var selected = null;

$.get("https://evanhanke.github.io/Personal/descriptions.txt",
    function(data) {
    descs = String(data).split("*");
    contentdiv.innerText = descs[0];
    console.log(descs);
    init();
});

function init(){

  option_div = document.getElementsByClassName("option")[0];
  var x = descs[1].split("#");
  options.push(new Option(option_div, x[1], x[0]));
  for(i = 1; i < descs.length-2; i++){
    var clone = option_div.cloneNode( true );
    x = descs[i+1].split("#");
    clone.innerText = descs[i+1].split("\n")[1];
    document.getElementById('sidebar').appendChild(clone );
    options.push(new Option(clone, x[1], x[0]);
  }

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
