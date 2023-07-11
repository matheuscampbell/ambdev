var Dockerode = require('dockerode');
var DockerodeCompose = require('dockerode-compose');

var docker = new Dockerode();
//var compose = new DockerodeCompose(docker, './test/wordpress.yml', 'wordpress');

exports.containner = {
    list : async function() {
        var containers = await docker.listContainers();
        return containers;
    },
    get: function(tag) {
        console.log('oks');
    }
}