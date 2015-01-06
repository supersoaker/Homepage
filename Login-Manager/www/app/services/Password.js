/**
 * Service to get the password by the given configurations
 */
app.service('passwordService', function() {

    /**
     * Function build the password
     * @returns {string}
     */
    this.getPassword = function() {
        var charset 	= "";
        var returnVal 	= "";
        var pwLength = PasswordConfig.configObj.length;

        if( PasswordConfig.configObj.lowerCase )
            charset += "abcdefghijklnopqrstuvwxyz";

        if( PasswordConfig.configObj.capitals )
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if( PasswordConfig.configObj.numbers )
            charset += "0123456789";

        if( PasswordConfig.configObj.specifics )
            charset += "!@#_";

        if( PasswordConfig.configObj.memorable ) {
            var consonantRx	= /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,
                vowel 		= "aeiou",
                consonant	= "bcdfghjklmnpqrstvwxyz";

            returnVal += consonant.charAt(Math.floor(Math.random() * consonant.length));

            for (var i = 0; i < pwLength; ++i) {
                // check if the last char is an consonant
                if ( consonantRx.test(returnVal.substr(returnVal.length - 1)) )
                    returnVal += vowel.charAt(Math.floor(Math.random() * vowel.length));
                else
                    returnVal += consonant.charAt(Math.floor(Math.random() * consonant.length));
            }
        } else {
            for (var i = 0, n = charset.length; i < pwLength; ++i)
                returnVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return returnVal;
    }
});
