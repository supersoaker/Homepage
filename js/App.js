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