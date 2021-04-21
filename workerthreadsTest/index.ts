import { Worker } from 'worker_threads';

for(let i = 0; i < 10; i++){
    let dataObj = { 
        year: 2001,
        noofdays: 10
    };

    const worker = new Worker('./izipdownloader.js', { workerData: dataObj});
    
    worker.on('message', (msg) => {
        console.log(msg);
    });
}