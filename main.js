// Generated by CoffeeScript 1.7.1
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.init = function() {
    var background, stage, tower;
    stage = new createjs.Stage("game-canvas");
    createjs.Ticker.addEventListener("tick", stage);
    background = new createjs.Shape();
    background.graphics.beginFill("#39AD50").drawRect(0, 0, 600, 600);
    stage.addChild(background);
    tower = new createjs.Bitmap("images/tower2.png");
    tower.x = 250;
    tower.y = 230;
    return stage.addChild(tower);
  };

}).call(this);