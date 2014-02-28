(function ($, window) {

	App.Util.Size = {

		_windowHeight : 0,

		init: function () {
			this.updateWindowSize();
			$( window ).on( 'resize', this.updateWindowSize.bind(this) );
		},

		updateWindowSize: function() {
			if( window.innerHeight !== this._windowHeight ) {
				this._onHeightChange();
				this._windowHeight = window.innerHeight;
			}
//			else {
//				console.log( "width geändert aber nicht height" );
//			}
		},

		_onHeightChange : function() {
			$('section').css( 'height', window.innerHeight );
			$( '#content-wrapper' ).css( 'height', window.innerHeight );
//			$('section .context').css( 'height', this.getPercentageHeight(30) );
		}

//		getPercentageHeight: function( percentage ) {
//			return window.innerHeight / (100 / percentage);
//		}
	};

})(jQuery, window);