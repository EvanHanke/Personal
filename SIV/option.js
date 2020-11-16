//option class with animation methods
class Option{

  constructor(div, contentdiv){
    this.div = div;
    this.contentdiv = contentdiv;
    this.div.onmouseenter = this.hover.bind(this);
    this.div.onmouseleave = this.unhover.bind(this);
  }

  click(){
    window.open(this.link, '_blank');
  }

  hover(){

      this.select.bind(this);

  }
  unhover(){
    if(this != selected){
      this.unselect;
    }
  }
  unselect(){
    this.div.css = ("color", "white");
    this.div.css = ("background-color", "black");
  }
  select(){
    this.div.css = ("color", "black");
    this.div.css = ("background-color", "white");
    console.log("hoevr;");
  }
}
