(function ($, window) {

	App.Util.Navi = {

		minWidth: 400, // ( pixels )
		_menuButton: {},
		_naviIsShown: false,
		_naviAnimRunning: false,
		_naviAnimSeconds: 1,

		init: function () {
			if( this._naviIsShown ){
				$('.close-navi').hide();
			} else {
				$('.open-navi').hide();
			}
			this._menuButton = $('#menu-button');
			this._menuButton.on( 'click', this.triggerNavi.bind( this ) );
		},

		triggerNavi : function() {
			if( !this._naviAnimRunning ) {
				var fn = function(){};
				if( this._naviIsShown ){
					$('#content-wrapper, #on-content-navi').css('transform', 'translateX(0px)');
					fn = function(){
						$('.close-navi').show();
						$('.open-navi').hide();
					};
					this._naviIsShown = false;
				} else {
					var width = this.getPercentageWidth(30);
					$('#content-wrapper, #on-content-navi').css('transform', 'translateX(-'+ width +'px)');
					fn = function(){
						$('.close-navi').hide();
						$('.open-navi').show();
					};
					this._naviIsShown = true;
				}
				this._naviAnimRunning = true;
				window.setTimeout(function(){
					fn();
					this._naviAnimRunning = false;
				}.bind(this), (this._naviAnimSeconds) * 1000);
			}
		},

		getPercentageWidth: function( percentage ) {
			return window.innerWidth / (100 / percentage);
		}

	};

})(jQuery, window);