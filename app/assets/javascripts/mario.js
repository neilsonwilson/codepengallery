document.addEventListener('DOMContentLoaded', function(){


// forked from tkrkt's "単純図形回転" http://jsdo.it/tkrkt/diagram_rotate

var DOT_SIZE = 4;
var X_START_POS = 100;
var Y_START_POS = 100;

// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□
// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□
// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□
// ‥‥‥‥‥■■■□□■□‥■■■
// ‥‥‥‥■□■□□□■□□■■■
// ‥‥‥‥■□■■□□□■□□□■
// ‥‥‥‥■■□□□□■■■■■‥
// ‥‥‥‥‥‥□□□□□□□■‥‥
// ‥‥■■■■■〓■■■〓■‥‥‥
// ‥■■■■■■■〓■■■〓‥‥■
// □□■■■■■■〓〓〓〓〓‥‥■
// □□□‥〓〓■〓〓□〓〓□〓■■
// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■
// ‥‥■■■〓〓〓〓〓〓〓〓〓■■
// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥
// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥
var dataSet = [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BG","BG",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BR","BG","BK","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BR","BG","BG","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BG","RD",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","RD","BK",
    "BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BG","RD","BK","BK",
    "BK","BK","RD","RD","RD","RD","RD","BL","RD","RD","RD","BL","RD","BK","BK","BK",
    "BK","RD","RD","RD","RD","RD","RD","RD","BL","RD","RD","RD","BL","BK","BK","BR",
    "BG","BG","RD","RD","RD","RD","RD","RD","BL","BL","BL","BL","BL","BK","BK","BR",
    "BG","BG","BG","BK","BL","BL","RD","BL","BL","YL","BL","BL","YL","BL","BR","BR",
    "BK","BG","BK","BR","BL","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
];

function getRgbColor(colorType)
{
    var colorHash = {
        "BK":"#000000", // black
        "WH":"#FFFFFF", // white
        "BG":"#FFCCCC", // beige
        "BR":"#800000", // brown
        "RD":"#FF0000", // red
        "YL":"#FFFF00", // yellow
        "GN":"#00FF00", // green
        "WT":"#00FFFF", // water
        "BL":"#0000FF", // blue
        "PR":"#800080"  // purple
    };
    return colorHash[colorType];
}

var config = {
    obj: {
        num: 20,
        step: Math.PI/24*0.3,
        lineWidth: 1,
        radius: 100
    },
    canvas: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    loop: {
        interval: 50
    },
    drawPattern: function(ctx){
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 27);
        ctx.lineTo(27, 100);
        ctx.closePath();
        ctx.stroke();
    },
    drawMario: function(ctx) {
        for (var i = 0; i < dataSet.length; i++) {
            var x = X_START_POS + (15 - (i % 16)) * DOT_SIZE;
            var y = Y_START_POS + Math.floor((15-i) / 16) * DOT_SIZE;
            var color = getRgbColor(dataSet[i]);
            if (dataSet[i] != "BK") {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, DOT_SIZE*0.9, DOT_SIZE*0.9);
            }
        }
    }
};

function Obj(center, offset, step){
    this.center = center;
    this.offset = offset;
    this.step = step;
}

Obj.prototype.draw = function(ctx){
    this.step += config.obj.step;
    
    ctx.save();
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(this.step + this.offset);
    
    //config.drawPattern(ctx);
    config.drawMario(ctx);
    
    ctx.restore();
};

// init canvas
var canvas = document.createElement('canvas');
canvas.width = config.canvas.width;
canvas.height = config.canvas.height;
document.body.appendChild(canvas);

// init context
var ctx = canvas.getContext('2d');

// init buffer
var bufferCanvas = document.createElement('canvas');
bufferCanvas.width = config.canvas.width;
bufferCanvas.height = config.canvas.height;
var buffer = bufferCanvas.getContext('2d');
/*
buffer.strokeStyle = '#000';
buffer.fillStyle = '#fff';
buffer.lineWidth = config.obj.lineWidth;
buffer.shadowColor = '#000';
buffer.shadowBlur = 10;
*/
buffer.strokeStyle = '#fff';
buffer.fillStyle = '#000';
buffer.lineWidth = config.obj.lineWidth;
//buffer.shadowColor = '#777';
//buffer.shadowBlur = 10;


var objList = [];
for(var i=0; i<config.obj.num; i++){
    var theta = i * Math.PI * 2 / config.obj.num;
    objList.push(new Obj({
        x: config.canvas.width/2 + config.obj.radius * Math.cos(theta),
        y: config.canvas.height/2 + config.obj.radius * Math.sin(theta)
    }, theta, Math.PI * i * 2));
}

function loop(){
    buffer.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    for(var i=0, len=objList.length; i<len; i++){
        objList[i].draw(buffer);
    }
    ctx.putImageData(buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height), 0, 0);
}

setInterval(loop, config.loop.interval);

});
