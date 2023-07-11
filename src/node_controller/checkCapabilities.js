const { exec, spawn } = require('child_process');

exports.dockerCheck = new Promise(
    function(resolve, reject) {
        var dockerInstalled = false;
        var dockerVersion = '';
        var dockerVersionRegex = /Docker version ([0-9.]+)/;
        var dockerVersionCommand = spawn('docker', ['--version']);
        dockerVersionCommand.stdout.on('data', (data) => {
            console.log(data.toString());
            resolve({
                dockerInstalled: true,
                msg: 'docker is installed'
            });
        }
        
        );
        
        dockerVersionCommand.on('close', (code) => {
            if (code != 0) {
                reject({
                    dockerInstalled: false,
                    msg: 'docker is not installed'
                });
            }
        }
        );
        
    });
    exports.dockerComposeCheck = new Promise(
        function(resolve, reject) {
        
            var dockerComposeVersion = '';
            var dockerComposeVersionCommand = spawn('docker-compose', ['--version']);
            dockerComposeVersionCommand.stdout.on('data', (data) => {
                resolve({   
                    dockerComposeInstalled: true,
                    msg: 'docker-compose is installed'
                });
            }
            );
            
            dockerComposeVersionCommand.on('close', (code) => {
                if (code != 0) {
                    reject({
                        dockerComposeInstalled: false,
                        msg: 'docker-compose is not installed'
                    });
                }
            }
            );
        });
    
    exports.wslCheck = new Promise(function(resolve, reject) {
        var wslInstalled = false;
        var wslVersion = '';
        var wslVersionRegex = / ([0-9.]+)/;
        var wslVersionCommand = spawn('wsl', ['--version']);
        wslVersionCommand.stdout.on('data', (data) => {
            resolve({
                wslInstalled: true,
                msg: 'wsl is installed'
            });
        }
        );
        
        wslVersionCommand.on('close', (code) => {
            if (code != 0) {
                reject({
                    wslInstalled: false,
                    msg: 'wsl is not installed'
                });
            }
        }
        );
    });














