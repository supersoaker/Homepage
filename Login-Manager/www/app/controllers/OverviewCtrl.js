/**
 * Controller for the login overview page
 * @param $scope
 * @constructor
 */
function OverviewCtrl( $scope, loginService ) {

    $scope.logins = logins;
    $scope.loginsLength = !!Object.keys(logins).length;

    $scope.titleFilter = function() {
        return function(login) {
            return login.title === $scope.search;
        }
    };

    $scope.showDetail = function( loginId ) {
        curDetailLoginId = loginId;
        overviewNavigator.pushPage("views/detail.html", {
            animation: 'slide',
            onTransitionEnd: function() {}
        });
    };
    $scope.addNewLogin = function() {
        curDetailLogin = {};
        overviewNavigator.pushPage("views/newLogin.html", {
            animation: 'slide',
            onTransitionEnd: function() {}
        });
    };


}