"use strict";
exports.__esModule = true;
var uWSImport = require("uws.js");
var uWebSocket = /** @class */ (function () {
    function uWebSocket() {
        this.options = {
            idleTimeout: 30,
            maxBackpressure: 1024,
            maxPayloadLength: 512,
            compression: uWSImport.DEDICATED_COMPRESSOR_3KB,
            open: this.openMethod
        };
        this.uWSApp = uWSImport.App().ws('/*', this.options);
        this.port = 9001;
    }
    uWebSocket.prototype.openMethod = function () {
        console.log('Somebody Connected');
    };
    uWebSocket.prototype.messageMethod = function () {
    };
    uWebSocket.prototype.closeMethod = function () {
    };
    uWebSocket.prototype.listenerFunc = function () {
        var _this = this;
        this.uWSApp.listen(this.port, function (listenSocket) {
            if (listenSocket) {
                console.log('Listening to Port' + _this.port);
            }
        });
    };
    return uWebSocket;
}());
var jack = new uWebSocket();
jack.listenerFunc();
