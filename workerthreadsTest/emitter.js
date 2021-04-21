const { parentPort, workerData } = require('worker_threads');

parentPort.postMessage('Finished Processing: ' + workerData.company);
parentPort.postMessage('Finished Processing: ' + workerData.startDate);
parentPort.postMessage('Finished Processing: ' + workerData.endDate);