var wrapper = {};
var menu = {

	maxDistance: 250,

	init: function() {

	},

	_bindEvents: function( )  {
		console.log(123)
		this._hammertime = new Hammer( wrapper );
		this._activateHammer();
	},

	_activateHammer: function(){
		this._hammertime.on('touch dragleft press pan pinch tap dragright swipeleft swiperight release', this._handleEvent);
	},

	_deactivateHammer: function(){
		this._hammertime.off('touch dragleft press pan pinch tap dragright swipeleft swiperight release', this._handleEvent);
	},
	_handleEvent: function(event) {
		console.log((event.type))
		switch (event.type) {

			case 'touch':
//				if (this._logic.isClosed()) {
//					if (!this._isInsideSwipeTargetArea(event)) {
//						event.gesture.stopDetect();
//					}
//				}

				break;

			case 'pan':
//				event.gesture.preventDefault();
//				console.log(event)
				var deltaX = event.deltaX;

				if( deltaX < (menu.maxDistance * -1) )
					deltaX = (menu.maxDistance * -1);
				if( deltaX > 0 )
					deltaX = 0;
				$(wrapper).css('transform', ' translateX(' + deltaX +'px)');
//				var deltaDistance = this._isRightMenu ? -deltaX : deltaX;

//				var startEvent = event.gesture.startEvent;
//
//				if (!('isOpened' in startEvent)) {
//					startEvent.isOpened = this._logic.isOpened();
//				}
//
//				if (deltaDistance < 0 && this._logic.isClosed()) {
//					break;
//				}
//
//				if (deltaDistance > 0 && this._logic.isOpened()) {
//					break;
//				}

//				var distance = startEvent.isOpened ?
//					deltaDistance + this._logic.getMaxDistance() : deltaDistance;
//
//				this._logic.translate(distance);

				break;

			case 'swipeleft':
//				event.gesture.preventDefault();
//
//				if (this._isRightMenu) {
//					this.open();
//				} else {
//					this.close();
//				}
//
//				event.gesture.stopDetect();
//				break;

			case 'swiperight':
//				event.gesture.preventDefault();
//
//				if (this._isRightMenu) {
//					this.close();
//				} else {
//					this.open();
//				}
//
//				event.gesture.stopDetect();
//				break;

			case 'release':
//				this._lastDistance = null;
//
//				if (this._logic.shouldOpen()) {
//					this.open();
//				} else if (this._logic.shouldClose()) {
//					this.close();
//				}
//
//				break;
		}
	}.bind(this)
}
$(function() {
	wrapper = document.getElementById('content-wrapper');
	menu._bindEvents(  );
//	wrapper.addEventListener('touchmove', function(event) {
//		var touch = event.targetTouches[0];
//		console.log(touch.pageX)
//		// Place element where the finger is
//		event.target.style.left = touch.pageX + 'px';
////		event.target.style.top = touch.pageY + 'px';
//		event.preventDefault();
//	}, false);
})
