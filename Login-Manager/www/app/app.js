var curDetailLoginId    = 0,
    curDetailLogin      = {},
    masterPassword      = "",
    logins              = {},
    AppConfig           = {
        ls_masterPw : "master-password",
        ls_logins : "logins",
        ls_GenSettings : "Password-Generator-Settings"
    },
    PasswordConfig      = {
        inputs: [],
        configObj: {
            // length of the password
            length: 10,
            // easy to memorable
            memorable: false,
            // specific letters
            specifics: false,
            // numbers
            numbers: true,
            // lowercase
            lowerCase: true,
            // uppercase
            capitals: true
        }
    }
;

angular.element(document).ready(function() {

    PasswordConfig.configObj 	= JSON.parse( localStorage.getItem( AppConfig.ls_GenSettings ) ) || PasswordConfig.configObj;

    document.wrapper            = document.getElementById('wrapper');
    document.wrapper.innerHTML  = document.getElementById('welcome-template').innerHTML;

    ons.bootstrap();

    document.body.addEventListener('click', function( e ) {
        if(app && app.slidingMenu && app.slidingMenu.isMenuOpened ){
            if( app.slidingMenu.isMenuOpened() && e.x > app.slidingMenu._logic._maxDistance )
                app.slidingMenu.closeMenu();
        }
    });
});
