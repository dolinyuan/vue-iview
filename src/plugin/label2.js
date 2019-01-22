var canvas,ctx;
var img;
// 基础配置
var config = {
  maxScale : 4.0,        // 最大放大倍数
  minScale : 0.5,        // 最小放大倍数
  step : 0.1            // 每次放大、缩小 倍数的变化值
};
// 标记是否移动事件
var isMove = false;
var imgStatus = {
  'scale' : 1.0,
  'rotate' : 0
};
var lastStatus = {};
function loadImage(imgSrc,canvas) {
  img =new Image();
  img.src = imgSrc;
  img.onload = function() {
    lastStatus = {
      "imgX" : -1 * img.width / 2,
      "imgY" : -1 * img.height / 2,
      'mouseX' : 0,
      'mouseY' : 0,
      'translateX' : canvas.width / 2,
      'translateY' : canvas.height /2,
      'scale' : 1.0,
      'rotate' : 0
    };
    drawImgByStatus(canvas.width / 2, canvas.height / 2);
  };
}
function drawImgByMove(x, y) {
  lastStatus.translateX = lastStatus.translateX + (x - lastStatus.mouseX);
  lastStatus.translateY = lastStatus.translateY + (y - lastStatus.mouseY);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(lastStatus.translateX, lastStatus.translateY);
  ctx.rotate(imgStatus.rotate * Math.PI / 180);
  ctx.scale(imgStatus.scale, imgStatus.scale);
  ctx.drawImage(img, lastStatus.imgX, lastStatus.imgY, img.width, img.height);
  ctx.restore();

  lastStatus.mouseX = x;
  lastStatus.mouseY = y;
}
function drawImgByStatus(x, y) {
  var imgX = lastStatus.imgX - (x - lastStatus.translateX) / lastStatus.scale;
  var imgY = lastStatus.imgY - (y - lastStatus.translateY) / lastStatus.scale;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(imgStatus.rotate * Math.PI / 180);
  ctx.scale(imgStatus.scale, imgStatus.scale);
  ctx.drawImage(img, imgX, imgY, img.width, img.height);
  ctx.restore();

  lastStatus = {
    'imgX' : imgX,
    'imgY' : imgY,
    'translateX' : x,
    'translateY' : y,
    'scale' : imgStatus.scale,
    'rotate' : imgStatus.rotate
  };
}

/**
 * 计算相对于canvas左上角的坐标值
 */
function windowToCanvas(x, y) {
  var box = canvas.getBoundingClientRect();   //获取某个元素相对于视窗的位置集合
  return {
    'x' : x - box.left,
    'y' : y - box.top
  };
}

export function imgLarge() {
  imgStatus.scale = (imgStatus.scale >= config.maxScale) ? config.maxScale : imgStatus.scale + config.step;
  drawImgByStatus(canvas.width / 2, canvas.height / 2);
}
export function imgSmall() {
  imgStatus.scale = (imgStatus.scale <= config.minScale) ? config.minScale : imgStatus.scale - config.step;
  drawImgByStatus(canvas.width / 2, canvas.height / 2);
}
export default function PanelDraw(imgSrc,getCanvas){
  canvas = getCanvas;
  ctx = canvas.getContext("2d");
  loadImage(imgSrc,canvas)

  canvas.onmousedown = function(e) {
    isMove = true;
    canvas.style.cursor = "move";

    var box = windowToCanvas(e.clientX, e.clientY);
    lastStatus.mouseX = box.x;
    lastStatus.mouseY = box.y;
  }

  canvas.onmouseout = function(e) {
    isMove = false;
    canvas.style.cursor = "default";
  }

  canvas.onmouseup = function(e) {
    isMove = false;
    canvas.style.cursor = "default";
  }

  canvas.onmousemove = function(e) {
    if(isMove) {
      var box = windowToCanvas(e.clientX, e.clientY);
      drawImgByMove(box.x, box.y);
    }
  }

  canvas.onmousewheel = function(e) {
    if(e.wheelDelta > 0) {
      imgStatus.scale = (imgStatus.scale >= config.maxScale) ? config.maxScale : imgStatus.scale + config.step;
    } else {
      imgStatus.scale = (imgStatus.scale <= config.minScale) ? config.minScale : imgStatus.scale - config.step;
    }
    var mXY = windowToCanvas(e.clientX, e.clientY);
    drawImgByStatus(mXY.x, mXY.y);
  }

}
