
function init() {
  // initialize sizes
  var canvWidth = 600;
  var canvHeight = 600;
  var radius = 80;
  var radiusMin = 80;
  var radiusMax = canvWidth/2;
  var cursorRadius = 3;

  // initialize stage and tickers
  var stage = new createjs.Stage("game-canvas");
  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener("tick", stage);
  createjs.Ticker.addEventListener("tick", tick);

  // draw background
  var background = new createjs.Shape();
  background.graphics.beginFill("#39AD50").drawRect(0, 0, canvWidth, canvHeight);
  stage.addChild(background);

  // draw tower
  var tower = new createjs.Bitmap("images/tower2.png");
  tower.x = 260;
  tower.y = 232;
  stage.addChild(tower);

  // draw circle
  var circle = new createjs.Shape();
  circle.graphics.setStrokeStyle(1).beginStroke("red").drawCircle(canvWidth / 2, canvHeight / 2, radius);
  stage.addChild(circle);

  // draw cursor
  var cursor = new createjs.Shape();
  cursor.graphics.beginFill("red").drawCircle(canvWidth / 2, canvHeight / 2 + radius, cursorRadius);
  stage.addChild(cursor);

  // handle ticks
  function tick(event) {
    // move cursor
    var delta = 3;
    if (key.isPressed('w')) {
      cursor.y -= delta;
    }
    if (key.isPressed('s')) {
      cursor.y += delta;
    }
    if (key.isPressed('a')) {
      cursor.x -= delta;
    }
    if (key.isPressed('d')) {
      cursor.x += delta;
    }
    // shrink/expand circle
    if (key.isPressed('up') && radius < radiusMax) {
      radius += delta;
      circle.graphics.clear();
      circle.graphics.setStrokeStyle(1).beginStroke("red").drawCircle(canvWidth / 2, canvHeight / 2, radius);
    }
    else if (key.isPressed('down') && radius > radiusMin) {
      radius -= delta;
      circle.graphics.clear();
      circle.graphics.setStrokeStyle(1).beginStroke("red").drawCircle(canvWidth / 2, canvHeight / 2, radius);
    }
  }
}
