import { Worker } from 'worker_threads';

for(let i = 0; i < 10; i++){
    let dataObj = { 
        company: "IOC",
        startDate: 20,
        endDate:20
    };

    const worker = new Worker('./emitter.js', { workerData: dataObj});
    
    worker.on('message', (msg) => {
        console.log(msg);
    });

    // worker.on('exit', (exitCode) => {
    //     console.log('One Worker Exited');
    // });
}