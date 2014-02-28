(function ($) {

	App.Util.Scroll = {

		_sectionImages: {},

		init: function () {
			this._sectionImages = $('#content-wrapper img');
			$( '#content-wrapper').scroll( this.onScroll.bind( this ) );
		},

		onScroll: function() {
			this._sectionImages.each(function(){
				var s = $(this).closest( 'section' ).offset().top;
				$(this).css('bottom', '-'+ (-s/2) +'px');
//				$(this).css('bottom', '-'+ (-s*1.25) +'px');
			})
		}
	};

})(jQuery);