import * as uWSImport from 'uws.js';

interface optionsWS {
    idleTimeout: number,
    maxBackpressure: number,
    maxPayloadLength: number,
    compression: number,
    open: () => void,
}

class uWebSocket {
    port: number;
    uWSApp1: uWSImport.TemplatedApp;
    uWSApp2: uWSImport.TemplatedApp;
    options: optionsWS;

    constructor(){
        this.options = {
            idleTimeout: 30,
            maxBackpressure: 1024,
            maxPayloadLength: 512,
            compression: uWSImport.DEDICATED_COMPRESSOR_3KB,
            open: this.openMethod,
        }

        this.uWSApp1 = uWSImport.App().ws('/jkl', this.options);
        this.uWSApp2 = uWSImport.App().ws('/pk', this.options);
        this.port = 9001;
    }

    openMethod(){
        console.log('Somebody Connected');
    }

    messageMethod(){

    }

    closeMethod(){

    }

    listenerFunc(){
        this.uWSApp1.listen(this.port, (listenSocket) => {
            if (listenSocket){
                console.log('Listening to Port' + this.port);
            }
        });

        this.uWSApp2.listen(this.port, (listenSocket) => {
            if (listenSocket){
                console.log('Listening to Port' + this.port);
            }
        });
    }
}

let jack = new uWebSocket();
jack.listenerFunc();