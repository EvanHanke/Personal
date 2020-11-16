//setup
/*
$( function(){
  subcontents = $(".subcontent").toArray();
  navbtns = $(".navbtn").toArray();
  for(var i = 0; i < subcontents.length; i++){
      options.push(new Option(navbtns[i], subcontents[i]));
  }
  //alert(options.length);
  selected = options[0];
  options[0].select;
  selected.div.css = ("display", "auto");
});
*/
var contents;
var selected;
var shown;

$( function(){
  shown = $("#home");
  shown.css("display", "inline");
  selected = $(".navbtn:eq(0)");
  selected.css("color", "black");
  selected.css("background-color", "white");


  $("#walkthrough").html(w);

  $(".navbtn").mouseenter(
    function(){
      HL($(this));
    });

  $(".navbtn").mouseleave(
    function(){
      if(!$(this)[0].isSameNode(selected[0])){
        unHL($(this));
      }
    })

    $(".navbtn").click(
      function(){
        if(!$(this)[0].isSameNode(selected[0])){
          unHL($(selected));
          selected = $(this);
          showContent($(".subcontent").eq($(this).index()));
        }
      })
});

function HL(j){
  j.css("color", "black");
  j.css("background-color", "white");
}
function unHL(j){
  j.css("color", "white");
  j.css("background-color", "black");
}

function showContent(c){
    shown.css("display", "none");
    shown = c;
    shown.css("display", "inline");
}
