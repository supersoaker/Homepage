/**
 * Controller for detail page
 * @param $scope
 * @constructor
 */
function DetailCtrl( $scope, loginService ) {

    $scope.loginId = curDetailLoginId;
    $scope.login = logins[ $scope.loginId ];

    overviewNavigator.on('prepop', function(event) {
        $scope.login = logins[ $scope.loginId ];
    });

    $scope.editLogin = function() {
        curDetailLogin = $scope.login;
        overviewNavigator.pushPage("views/newLogin.html", {
            animation: 'slide',
            onTransitionEnd: function() {}
        });
    };
}
