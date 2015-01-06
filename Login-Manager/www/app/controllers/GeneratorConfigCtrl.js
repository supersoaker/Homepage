/**
 * Controller for password generator page
 * @param $scope
 * @constructor
 */
function GeneratorConfigCtrl( $scope ) {

    $scope.saved = true;
    $scope.save = function() {
        PasswordConfig.configObj.length = $scope.length;
        (function( obj ) {

            for( var o in obj.configObj ){
                if( obj.inputs[o] ) {
                    obj.configObj[o] = obj.inputs[o].isChecked();
                }
            }

        })( PasswordConfig );

        localStorage.setItem(AppConfig.ls_GenSettings, angular.toJson(PasswordConfig.configObj));

        $scope.saved = false;
        setTimeout(function() {
            $scope.saved = true;
            $scope.$digest();
        }, 500)
    };

    $scope.setPropInCtrl = function( prop, value ) {
        $scope[prop] = value.isChecked() ? true : false;
    };

    (function( configObj ) {
        $scope.length    	= configObj.length;
        $scope.memorable 	= configObj.memorable;
        $scope.specifics 	= configObj.specifics;
        $scope.numbers 		= configObj.numbers;
        $scope.lowerCase 	= configObj.lowerCase;
        $scope.capitals 	= configObj.capitals;

        angular.element(document).ready(function () {
            for( var o in configObj ){
                if( PasswordConfig.inputs[o] ) {
                    PasswordConfig.inputs[o].setChecked( !!configObj[o] );
                }
            }
        });

    })( PasswordConfig.configObj );
}




