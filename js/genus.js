function pageRedirect() {
    window.location.href = "answers.html";
  }
  function area1(){
    //triangle
    var x1=document.getElementById('b1').value;
    var y1=document.getElementById('h1').value;
    var r1=0.5*x1*y1;
    Document.getElementById('tri1').innerHTML=r1;
}
function area2(){
    //recangle

    var x2=document.getElementById('b2').value;
    var y2=document.getElementById('h2').value;
    var r2=x2*y2;
    Document.getElementById('tri2').innerHTML=r2;
}
function area3(){
    //Parallelogram
    var x3=document.getElementById('b3').value;
    var y3=document.getElementById('h3').value;
    var r3=x3*y3;
    Document.getElementById('tri3').innerHTML=r3;
}
function area4(){
    //Rhombus
    var x4=document.getElementById('b4').value;
    var y4=document.getElementById('h4').value;
    var r4=0.5*x4*y4;
    Document.getElementById('tri4').innerHTML=r4;
}
function area5(){
    //pentagon
    var x5=document.getElementById('b5').value;
    var y5=document.getElementById('h5').value;
    var r5=0.5*x5*y5;
    Document.getElementById('tri5').innerHTML=r5;
}
function area6(){
    //ellipse
    var x6=document.getElementById('b6').value;
    var y6=document.getElementById('h6').value;
    var r6=3.14156*x6*y6;
    Document.getElementById('tri6').innerHTML=r6;
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color ="#";
  for (var i=0;i<6;i++){
    color += letters[Math.floor(math.random()*16)];
  }
  return color;
}
 setInterval(function(){
  document.body.style.background=getRandomColor();
  document.body.style.transition="0.5 s";
 },2000);