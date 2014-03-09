var App = {};

(function($, doc, window) {
	'use strict';

	App = {

        mobileDevice: false,

		init: function() {

            // check if navigator is a mobile device
//            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.mobileDevice = true;
            }

            if( this.mobileDevice ){
                this.mobileInitFn();
            } else {
                this.browserInitFn();
            }

			// initialize all utilities
			for (var obj in this.Util) {
				if( this.Util[obj].init() ){
					this.Util[obj].init();
				}
			}

			// add the smooth mousewheel
			$("#content-wrapper").smoothWheel();

			// add event listener on next section button
//			$('.next-section').each(function( i ){
//					console.log($('section'))
////					console.log(that)
//				$( this ).on('click', function(){
////					console.log(123)
//					$("#content-wrapper").scrollTo( $('section')[i+1], 800 );
//				});
//				console.log(i)
//			});

		},

        mobileInitFn: function(){
            $( '.img-wrapper').eq(2).html(
                '<img src="index/images/bg_samples/iceland_landscape-wallpaper-2560x1600.jpg" alt=""/>'
            );

        },

        browserInitFn: function(){
            $( 'section').eq(2).css({
                "background-image"        : "url('index/images/bg_samples/iceland_landscape-wallpaper-2560x1600.jpg')",
                "background-position"     : "bottom right",
                "background-attachment"   : "fixed"
            });
        },

		addStyles: function( styles ) {
			var styleElem = doc.createElement('style');
			styleElem.innerHTML = styles;
			doc.getElementsByTagName( 'head' )[0].appendChild( styleElem );
		}
	};

	App.Util = {};
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

            $("#content-wrapper").smoothWheel();
			$('section').css( 'height', window.innerHeight );
			$( '#content-wrapper' ).css( 'height', window.innerHeight );
//			$('section .context').css( 'height', this.getPercentageHeight(30) );
		}

//		getPercentageHeight: function( percentage ) {
//			return window.innerHeight / (100 / percentage);
//		}
	};

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
//					var naviWidth = this.getPercentageWidth(30);
					var naviWidth = 300;
                    if( App.mobileDevice ){
                        // correct the navi width for mibile devices
                        // the window-width - the menu button
//                        alert(window.innerWidth)
                        naviWidth = window.innerWidth - 150;
                        naviWidth = (naviWidth > 300) ? 300 : naviWidth;
                    }
					$('#content-wrapper, #on-content-navi').css('transform', 'translateX(-'+ naviWidth +'px)');
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

	App.Util.Scroll = {

		_sectionImages: {},

		init: function () {

            // if user is not a mobile device, add parallax
            if( !App.mobileDevice ){
                this._sectionImages = $('#content-wrapper img');
                $( '#content-wrapper' ).scroll( this.onScroll.bind( this ) );
            }
		},

		onScroll: function() {
			this._sectionImages.each(function(){
				var s = $(this).closest( 'section' ).offset().top;
//				$(this).css('bottom', '-'+ (-s/2) +'px');
				$(this).css('bottom', '-'+ (-s/3) +'px');
//				$(this).css('bottom', '-'+ (-s*1.25) +'px');
			})
		}
	};


})(jQuery, document, this);

/*
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
	*/