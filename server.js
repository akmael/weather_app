var express = require('express'),
    logger  = require('morgan')('dev'),
    server  = express();



server.use(express.static(__dirname+'/public'));
server.use(logger);
server.set('port', process.env.PORT || 8080);

server.get('/', home);

server.listen(server.get('port'), listenCallBack);

function home( req, res){
  res.sendFile('/html/index.html',{root:__dirname+'/public'});
}

function listenCallBack(){
  console.log('Now Listening on port'+ server.get('port'));
}
