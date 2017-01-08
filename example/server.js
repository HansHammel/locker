(function() {

    var Locker = require("../index"),
        locker = new Locker();

    process.on('SIGTERM', function() {
        console.log('SIGTERM - Server closing...');
        locker.close(function () {
            process.exit(0);
        });
    });
    process.on('SIGHUP', function() {
        console.log('SIGHUP - Server closing...');
        locker.close(function () {
            process.exit(0);
        });
    });

    process.on('SIGINT', function() {
        console.log('SIGINT - Server closing...');
        locker.close(function () {
            process.exit(0);
        });
    });
    process.on('exit', function() {
        console.log('EXIT - Server closing...');
        locker.close(function () {
            process.exit(0);
        });
    });

    console.log('Server started, listening on port 4545');
    locker.listen(4545);

})();
