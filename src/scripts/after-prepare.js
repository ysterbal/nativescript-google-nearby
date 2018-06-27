const sourceMapLocation = '/node_modules/nativescript-google-nearby/platforms/ios/module.modulemap';
const targetMapLocation = '/platforms/ios/NearbyMessages/module.modulemap';
const projectMapFolder = '/platforms/ios/NearbyMessages/';
module.exports = function (logger, platformsData, projectData, hookArgs, $usbLiveSyncService) {
    var fs = require('fs');
    let targetMapFolder = projectData.projectDir + projectMapFolder;
    if (!fs.existsSync(targetMapFolder)) {
        fs.mkdirSync(targetMapFolder);
    }
    fs.copyFileSync(projectData.projectDir + sourceMapLocation, projectData.projectDir + targetMapLocation);
}