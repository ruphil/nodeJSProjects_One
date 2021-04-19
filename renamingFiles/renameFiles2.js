const fs = require('fs');

// let dirPath = 'D:/0_YOJANA_ARCHIVES/';
let dirPath = 'C:/Users/user/OneDrive - Indian Institute of Science/DOCUMENTS/0_YOJANA_ARCHIVES/';

fs.readdirSync(dirPath).forEach(file => {
    let oldfilePath = dirPath + file;

    let oldfileName = file;

    let newFileName = oldfileName.replace(/[^a-z0-9]/gi,'-').replace('-xlsx', '.xlsx');

    let newfilePath = dirPath + newFileName;

    console.log(newfilePath);
    
    fs.renameSync(oldfilePath, newfilePath);
});

console.log('Done')

