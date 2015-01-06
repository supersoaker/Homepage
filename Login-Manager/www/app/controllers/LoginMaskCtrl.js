/**
 * Controller for the login mask
 * @param $scope
 * @param crypticService
 * @param loginService
 * @constructor
 */
function LoginMaskCtrl( $scope, crypticService, loginService ) {

    loginService.setLogins( JSON.parse( localStorage.getItem( AppConfig.ls_logins ) ) || {} );
    logins = JSON.parse( localStorage.getItem( AppConfig.ls_logins ) ) || {};

    $scope.pwIsSet = localStorage.getItem( AppConfig.ls_masterPw ) ? true : false;
    $scope.pwIsWrong = false;
    $scope.checkPassword = function() {
        if( crypticService.getHash( $scope.password ) === JSON.parse( localStorage.getItem( AppConfig.ls_masterPw ) )){
            masterPassword = $scope.password;
            $scope.showApplication();
        } else {
            var input = document.getElementById('passwordInput');
            input.classList.add("shake");
            input.classList.add("red-border");
            setTimeout(function() {
                input.classList.remove("shake");
            }, 400);
        }
    };

    $scope.showApplication = function() {

        if( !$scope.password )
        return;

        crypticService.setPassword( $scope.password );
        var pwHash = crypticService.getHash( $scope.password )

        if( !$scope.pwIsSet )
        localStorage.setItem( AppConfig.ls_masterPw, angular.toJson( pwHash ) );

        ons.ready(function() {
            document.wrapper.innerHTML = document.getElementById('application-template').innerHTML;
            ons.compile(document.wrapper);
        })

    };
}