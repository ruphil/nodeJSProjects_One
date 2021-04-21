const { parentPort, workerData } = require('worker_threads');
const moment = require('moment');

parentPort.postMessage('Finished Processing: ' + workerData.company + moment().toLocaleString());
