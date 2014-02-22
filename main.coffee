root = exports ? this
root.init = ->
	# initialize stage
	stage = new createjs.Stage("game-canvas")
	createjs.Ticker.addEventListener("tick", stage)

	# draw background
	background = new createjs.Shape()
	background.graphics.beginFill("#39AD50").drawRect(0, 0, 600, 600)
	stage.addChild(background)

	# draw tower
	tower = new createjs.Bitmap("images/tower2.png"); 
	tower.x = 250;
	tower.y = 230;
	stage.addChild(tower);