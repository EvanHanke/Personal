var title = document.getElementById('title');
var banner = document.getElementById('banner');
var about = document.getElementById('about');

document.body.onresize = updateBack;
banner.onmouseenter = hover;
banner.onmouseleave = unhover;
banner.onmouseclick = expandback;

onmousemove = function(e){
  var x = e.clientX;
  var y = e.clientY;
  var w = window.innerWidth;
  var h = window.innerHeight;

  var delta_x = (-x + (0.5*w))/(0.5*w);
  var delta_y = (-y + (0.5*h))/(0.5*h);

  var vid = document.getElementById('backvid');
  vid.style.left = String(delta_x) + "%";
  vid.style.top = String(delta_y) + "%";


}

function updateBack(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  var s_h = "120%";
  var s_w = "auto";
  if((w / h) > 1.3333333){
    s_h = "auto";
    s_w = "120%";
  }
  var vid = document.getElementById('backvid');
  vid.style.height = s_h;
  vid.style.width = s_w;
}

function expandback(){
  banner.style.width = "99%";
  banner.style.height = "80%";
}

function unhover(){
  fadebanner(false);
}

function hover(){
  fadebanner(true);
}

var banneranim;
var timer = 0;
var direction;
var start;
var c_a = 0;

function fadebanner(x){

  direction = (Boolean(x)? 1 : -1);
  if(!Boolean(banneranim)){
    banneranim = setInterval(fadebanneranim, 10);
  }
}

function fadebanneranim(){
  var a = String((timer));
  timer += (0.01 * direction);
  banner.style.backgroundColor = "rgba(0, 0, 0, " +String(a)+")";
  banner.style.height = String((80*a) + 20) + "%";
  banner.style.top = String(40-(40*a)) + "%";

  if(timer > .9 || timer < 0){
    clearInterval(banneranim);
    banneranim = null;
  }

  about.style.opacity = String(a);
}

function fadetextanim(){

}
