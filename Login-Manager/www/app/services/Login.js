/**
 * Service for the logins
 */
app.service('loginService', function() {

    /**
     * the current seen login id
     * @type {number}
     */
    this.curDetailLoginId   = 0;

    /**
     * the current seen login object
     * @type {Object}
     */
    this.curDetailLogin     = {};

    /**
     * the logins
     * @type {Object}
     */
    this.logins             = {};

    /**
     * the login constructor
     * @constructor
     */
    function Login() { }

    /**
     * the prototype of the Login class
     * @type {}
     */
    Login.prototype = {
        id          : 0,
        title       : "",
        username    : "",
        email       : "",
        password    : "",
        description : ""
    };

    /**
     * setter function for the logins
     * @param loginsArr
     */
    this.setLogins = function( loginsArr ) {
        this.logins = loginsArr;
    };

    /**
     * function to save the logins into the localStorage
     */
    this.saveLogins = function() {
        var input = angular.toJson(logins);
        localStorage.setItem(AppConfig.ls_logins, input);
    };

    /**
     * return a new login
     * @returns {Login}
     */
    this.newLogin = function() {
        return new Login();
    };
});
