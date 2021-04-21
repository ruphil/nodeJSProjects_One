const { parentPort, workerData } = require('worker_threads');
const moment = require('moment');
const path = require('path');

let year = workerData.year;
let enddate = workerData.enddate;

let currentDateObj = moment(`${year}-01-01`, 'YYYY-MM-DD');
let endDateObj = moment(enddate, 'YYYY-MM-DD');

const downloaderInterval = setInterval(() => {
    let day = currentDateObj.day();
    if(day != 0 && day != 6){
        let formatStr = `[https://icontentdelivery.appspot.com/?date=]YYYY-MM-DD`;
        let formattedURL = currentDateObj.format(formatStr);
        let filename = path.basename(formattedURL);
        // console.log(formattedURL, filename);
        parentPort.postMessage(formattedURL);
    }
    
    if(currentDateObj.isAfter(endDateObj)){
        clearInterval(downloaderInterval);
    }

    currentDateObj.add(1, 'day');
}, 2000);