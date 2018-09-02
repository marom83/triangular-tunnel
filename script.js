$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var diff = 5;
    var a = 150;
    var b = 20;
    var c = 110;
    var d = 100;
    var f = 150;
    var e = 190;
    
    
    for(var i = 0; i < 30; i++){
    context.beginPath();
    context.moveTo(a,b);
    context.lineTo(c,d);
    context.lineTo(e,f);
    context.lineTo(a,b);
    context.stroke();
    a+=5;
    b+=5;
    c+=5;
    d+=5;
    e+=5;
    f+=5;
    }
    });