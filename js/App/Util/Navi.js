(function ($, window) {

	App.Util.Navi = {

		minWidth: 400, // ( pixels )

		init: function () {
			var width = this.getPercentageWidth(30);
			$('#content-wrapper').css('transform', 'translateX(-'+ width +'px)');
		},

		getPercentageWidth: function( percentage ) {
			return window.innerWidth / (100 / percentage);
		}

	};

})(jQuery, window);