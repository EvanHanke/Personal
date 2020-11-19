//option class with animation methods
class Option{

  constructor(div, desc, link){
    this.div = div;
    this.div.onmouseenter = this.hover.bind(this);
    this.div.onmouseleave = this.unhover.bind(this);
    this.div.addEventListener('touchstart',this.touch.bind(this), false);
    this.div.addEventListener('click',this.click.bind(this), false);
    this.hovered = false;
    this.timer = 0;
    this.anim = null;
    this.desc = desc;
    this.link = link;
  }

  click(ev){
    window.open(this.link, '_blank');
    ev.preventDefault();
  }

  touch(ev){

    if(selected != this){
      this.hover();
      $("#linktxt").text(this.link);
      visitbtn.css("display", "inline-block");
    }
    else{
      this.unhover();
      visitbtn.css("display", "none");
    }

    ev.preventDefault();
  }

  hover(){
    console.log("hover");
    if(selected != this && selected != null){
      selected.hovered = false;
      selected.timer = 1;
      clearInterval(selected.anim);
      selected.anim= setInterval(selected.myanimate.bind(selected), 10);
    }
    selected = this;
    contentdiv.textContent = this.desc;
    this.hovered = true;
    clearInterval(this.anim);
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
      this.timer += 0.05;
    }
    else if (!this.hovered && this.timer > 0){
      this.timer -= 0.05;
    }

    var x = (this.timer*5);
    if (x < 0) x = 0;
    this.div.style.left = String(x) + "%";

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
var visitbtn;


$.get("./descriptions.txt",
    function(data) {
    descs = String(data).split("*");
    contentdiv.innerText = descs[0];
    console.log(descs);
    init();
});

function init(){
  visitbtn = $("#mobilelink");
  $("#mobilelink").on("touchstart click", function(){
      window.open(selected.link, '_blank');
    });

  visitbtn.css("display", "none");




  option_div = document.getElementsByClassName("option")[0];
  var x = descs[1].split("#");
  options.push(new Option(option_div, x[0], x[1]));
  for(i = 1; i < descs.length-2; i++){
    var clone = option_div.cloneNode( true );
    x = descs[i+1].split("#");
    clone.innerText = descs[i+1].split("\n")[1];
    document.getElementById('sidebar').appendChild(clone );
    options.push(new Option(clone, x[0], x[1]));
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
