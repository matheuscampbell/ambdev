const { app,ipcMain } = require('electron');
const docker = require('./docker.js');
const checkCapabilities = require('./checkCapabilities.js');

exports.init = function() {
    ipcMain.on('docker', (event, arg) => {
        args = JSON.parse(arg);
        if(args.action == 'list') {
            docker.containner.list().then((containers) => {
                event.reply('docker', JSON.stringify(containers));
            });
        }
    });

    ipcMain.on('checkCapabilities', (event, arg) => {
        checkCapabilities.dockerCheck.then(
        (result) => {
            console.log(result);
            event.reply('checkCapabilities', result);
        }, 
        (error)=>{
            console.log(error);
            event.reply('checkCapabilities', error);
        });
        
    });

    ipcMain.on('closeApp', (event, arg) => {
        //fecha a aplicação
        app.quit();
    });

    ipcMain.on('data', (event, arg) => {
        args = JSON.parse(arg);
        console.log(args);
    });

}