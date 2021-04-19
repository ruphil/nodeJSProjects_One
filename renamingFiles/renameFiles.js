const fs = require('fs');

let dirPath = "D:/GIS/kmls/";

fs.readdirSync(dirPath).forEach(file => {
    let oldfilePath = dirPath + file;

    let oldfileName = file;

    let newFileName = oldfileName.replace(/[^a-z0-9]/gi,'');

    let newfilePath = dirPath + newFileName;

    newfilePath = newfilePath.substring(0, newfilePath.length - 3) + ".kml";
    
    fs.renameSync(oldfilePath, newfilePath);
});

