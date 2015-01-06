/**
 * Angular service for en-/decrypting data
 */
app.service('crypticService', function() {

    /**
     * password for en-/decryption
     */
    var password = "";

    /**
     * the format object for CryptoJS
     */
    var JsonFormatter = {
            stringify: function (cipherParams) {
                // create json object with ciphertext
                var jsonObj = {
                    ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
                };

                // optionally add iv and salt
                if (cipherParams.iv) {
                    jsonObj.iv = cipherParams.iv.toString();
                }
                if (cipherParams.salt) {
                    jsonObj.s = cipherParams.salt.toString();
                }

                // stringify json object
                return JSON.stringify(jsonObj);
            },

            parse: function (jsonStr) {
                // parse json string
                var jsonObj = JSON.parse(jsonStr);

                // extract ciphertext from json object, and create cipher params object
                var cipherParams = CryptoJS.lib.CipherParams.create({
                    ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
                });

                // optionally extract iv and salt
                if (jsonObj.iv) {
                    cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
                }
                if (jsonObj.s) {
                    cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
                }

                return cipherParams;
            }
        };

    /**
     * Setter function for password
     * @param {String} passwordStr
     */
    this.setPassword = function( passwordStr ) {
        password = passwordStr;
    };

    /**
     * function to decrypt a message with a key
     * @param {String} message - the message which is going to be decrypted
     * @param {String} key - the decryption-key
     * @returns {String} - the decrypted string
     */
    this.decrypt = function( message, key ) {
        if( typeof key === 'undefined' )
            key = password;
        var decrypted   = CryptoJS.AES.decrypt( message, key, { format: JsonFormatter } );
        return decrypted.toString( CryptoJS.enc.Utf8 );
    };

    /**
     * function to encrypt a message with a key
     * @param {String} message - the message which is going to be encrypted
     * @param {String} key - the encryption-key
     * @returns {String} - the encrypted string
     */
    this.encrypt = function( message, key ) {
        if( typeof key === 'undefined' )
            key = password;
        var encrypted = CryptoJS.AES.encrypt( message, key, { format: JsonFormatter }  );
        return encrypted + "";
    };

    /**
     * function to get the sha512 hash value from the param
     * @param {String} value - the value
     * @returns {String} - the value as hash
     */
    this.getHash = function(value) {
        return CryptoJS.SHA512(value).toString(CryptoJS.enc.Hex);
    };

});
