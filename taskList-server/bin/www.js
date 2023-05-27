const http = require('http');

const PORT = 5000;

const {serverHandler} = require('../app.js');

const server = http.createServer(serverHandler);

server.listen(PORT,() => {
    console.log('server running at port 5000...');    
})