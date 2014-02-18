(function ($) {

	App.Util.Size = {

		_windowHeight : 0,

		init: function () {
			this.updateWindowSize();
			$( window ).on( 'resize', this.updateWindowSize.bind(this) );
		},

		updateWindowSize: function() {
			if( $( window ).height() !== this._windowHeight ) {
				this._onHeightChange();
				this._windowHeight = $( window ).height();
			}
//			else {
//				console.log( "width geändert aber nicht height" );
//			}
		},

		_onHeightChange : function() {

			$('section').css( 'height', $( 'body' ).outerHeight() );
		}
	};

})(jQuery);