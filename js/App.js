var App = {};

(function($) {
	'use strict';

	App = {
		init: function() {
			for (var obj in this.Util) {
				this.Util[obj].init();
			}
		}
	};

	App.Util = {};

})(jQuery);