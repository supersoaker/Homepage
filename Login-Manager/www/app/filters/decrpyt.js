/**
 * Filter for encrypting string with the password saved in crypticService
 */
app.filter('decrypt', function ( crypticService ) {
    return function (item) {
        return crypticService.decrypt(item);
    };
});