const express = require('express');
const app = express();
const path = require('path');
const { port, hostname } = require('./settings');
const sockets = new Set();

app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

function withCollectSockets(server) {
    server.on('connection', (socket) => {
        sockets.add(socket);
    });
    return server;
}

if (require.main === module) {
    withCollectSockets(app.listen(port, hostname, function () {
        console.log(`Example app listening on port ${port}!`);
    }));
} else {
    let server;
    module.exports = {
        open(port) {
            return new Promise(resolve => {
                server = withCollectSockets(app.listen(port, hostname, function () {
                    resolve();
                    console.log(`Example app listening on port ${port}!`);
                }));
            });
        },
        close() {
            return new Promise(resolve => {
                for (let socket of sockets.values()) {
                    socket.destroy();
                }
                server.close(err => {
                    if (!err) {
                        resolve();
                    }
                    else throw err;
                });
            });
        }
    }
}