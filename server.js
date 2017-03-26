let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let docker = require('dockerapi');

//Uses the environment port or defaults to 3000
let port = process.env.PORT || 3000

//Serves the static files from /public directory

app.use(express.static('public'));

//Creates an endpoint which returns the index.html file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

//Starts the server
server.listen(port, () => console.log('server has started on port ' + port))
