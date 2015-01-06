/**
 * Controller for the new login page
 * @param $scope
 * @param crypticService
 * @param loginService
 * @param passwordService
 * @constructor
 */
function NewLoginCtrl( $scope, crypticService, loginService, passwordService ) {
    $scope.isUpdate = false;
    $scope.pageTitle = "Neuer Login";
    (function initCtrl() {
        if( Object.keys(curDetailLogin).length ) {
            $scope.isUpdate     = true;
            $scope.pageTitle    = curDetailLogin.title;
            $scope.title        = curDetailLogin.title;
            $scope.username     = crypticService.decrypt( curDetailLogin.username );
            $scope.email        = crypticService.decrypt( curDetailLogin.email );
            $scope.password     = crypticService.decrypt( curDetailLogin.password );
            $scope.description  = crypticService.decrypt( curDetailLogin.description );

        }
    })();

    function checkForm() {
        var valid = true;
        if( !$scope.title )
            valid = false;
        if( !$scope.password )
            valid = false;
        return valid;
    }

    $scope.generatePasswort = function() {
        $scope.password = passwordService.getPassword();
    };

    $scope.update = function() {
        var login = _getLoginFromView();
        login.id = curDetailLogin.id;
        logins[ login.id ] = login;
        loginService.saveLogins();
        curDetailLogin = {};
        overviewNavigator.popPage();
    };

    $scope.deleteLogin = function() {
        delete logins[curDetailLogin.id];

        loginService.saveLogins();
        var pages = overviewNavigator.getPages();
        pages[1].destroy();
        overviewNavigator.popPage();
    };

    function _getLoginFromView() {
        var login = loginService.newLogin();
        login.title       = $scope.title;
        login.username    = crypticService.encrypt( $scope.username );
        login.email       = crypticService.encrypt( $scope.email );
        login.password    = crypticService.encrypt( $scope.password );
        login.description = crypticService.encrypt( $scope.description );
        return login;
    }

    $scope.save = function() {
        if( !checkForm() )
            return;

        var login = _getLoginFromView();
        var loginsKeys = Object.keys($scope.$parent.logins);
        login.id = 1;
        if( loginsKeys.length ) {
            var lastLogin = $scope.$parent.logins[ loginsKeys[loginsKeys.length - 1] ];
            login.id  = lastLogin.id + 1;
        }

        $scope.$parent.logins[ login.id ] = login;

        loginService.saveLogins();
        app.slidingMenu.setMainPage('views/overview.html', {closeMenu: true });
    };
}
