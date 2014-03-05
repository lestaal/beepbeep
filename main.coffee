root = exports ? this
root.init = ->
	# initialize sizes
	canvWidth = 600
	canvHeight = 600
	radius = 80
	cursorRadius = 3

	# initialize stage
	stage = new createjs.Stage("game-canvas")
	createjs.Ticker.setFPS(30)
	createjs.Ticker.addEventListener("tick", stage)
	createjs.Ticker.addEventListener("tick", tick)

	# draw background
	background = new createjs.Shape()
	background.graphics.beginFill("#39AD50").drawRect(0, 0, canvWidth, canvHeight)
	stage.addChild(background)

	# draw tower
	tower = new createjs.Bitmap("images/tower2.png"); 
	tower.x = 260;
	tower.y = 232;
	stage.addChild(tower);

	# draw circle
	circle = new createjs.Shape()
	circle.graphics.setStrokeStyle(1).beginStroke("red").drawCircle(canvWidth/2, canvHeight/2, radius)
	stage.addChild(circle);

	# draw cursor
	cursor = new createjs.Shape()
	cursor.graphics.beginFill("red").drawCircle(canvWidth/2, canvHeight/2 + radius, cursorRadius)
	stage.addChild(cursor)

	# key listener
	tick = (event) ->
		delta = 3
		cursor.y -= delta if key.isPressed('w')
		cursor.y += delta if key.isPressed('s')
		cursor.x -= delta if key.isPressed('a')
		cursor.x += delta if key.isPressed('d')
		null

	null