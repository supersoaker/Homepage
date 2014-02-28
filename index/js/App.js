var App = {};

(function($, doc) {
	'use strict';

	App = {

		init: function() {

			// initialize all utilities
			for (var obj in this.Util) {
				this.Util[obj].init();
			}


			$("#content-wrapper").smoothWheel();
		},

		addStyles: function( styles ) {
			var styleElem = doc.createElement('style');
			styleElem.innerHTML = styles;
			doc.getElementsByTagName( 'head' )[0].appendChild( styleElem );
		}
	};

	App.Util = {};

})(jQuery, document);
(function(){
	function isTouchDevice(){
		try{
			document.createEvent("TouchEvent");
			return true;
		}catch(e){
			return false;
		}
	}

	function touchScroll(id){
		if(isTouchDevice()){ //if touch events exist...
			var el=document.getElementById(id);
			var scrollStartPos=0;

			document.getElementById(id).addEventListener("touchstart", function(event) {
				scrollStartPos=this.scrollTop+event.touches[0].pageY;
				event.preventDefault();
			},false);

			document.getElementById(id).addEventListener("touchmove", function(event) {
				this.scrollTop=scrollStartPos-event.touches[0].pageY;
				event.preventDefault();
			},false);
		}
	}

	//On page load
	touchScroll('content-wrapper')

})();