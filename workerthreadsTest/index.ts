import { Worker } from 'worker_threads';

let dataObj = { 
    year: 2001,
    enddate: '2001-01-10'
};

const worker = new Worker('./izipdownloader.js', { workerData: dataObj});

worker.on('message', (msg) => {
    console.log(msg);
});