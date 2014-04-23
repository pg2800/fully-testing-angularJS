var http = require('http'),
  url = require('url'),
  fs = require('fs');
//var fileExt = /^\/[0-9a-z\-_]+\.(html)|(json)|(js)|(css)|(xml)$/;
var fileExt = /\.(html)|(json)|(js)|(css)|(xml)$/;

var user = {user: {firstName:'Ivan', lastName:'Espinoza' ,admin:true, email:'iespinoza@tekmexico.com'}};

http.createServer(function (req, res) {
  var reqData = {
    url: url.parse(req.url, true),
    method: req.method,
    headers: req.headers },
  path = reqData.url.pathname;

  if(path == '/') path += 'index.html';
  
  if(path.match(fileExt)){
   
    fs.readFile('.' + path, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('not found');
      }
      else {
        var ext = path.split('.')[1];
        if(ext == 'html')
          res.writeHead(200, {'Content-Type': 'text/html'});
        else if(ext == 'xml')
          res.writeHead(200, {'Content-Type': 'application/xml'});
        else if(ext == 'css')
          res.writeHead(200, {'Content-Type': 'text/css'});
        else if(ext == 'js')
          res.writeHead(200, {'Content-Type': 'application/javascript'});
        else
          res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
      }
    });
  }
  else if(path == '/login') {

    if(req.method === 'POST'){
        req.setEncoding('utf8');
        var body = '';
        req.on('data', function (data) {
            body+=data;
        });
        req.on('end', function (){
            try{
                var data = JSON.parse(body);
            } catch (er) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end();
            }
        
            res.writeHead(200, {'Content-Type': 'application/json'});
            
            console.log (data.email,' === ',user.user.email,' is ',(data.email === user.user.email));
            if(data.email == user.user.email)
                res.end(JSON.stringify(user));
            else
                res.end();
        });
    } else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end();
    }
  } else if (path == '/current-user') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({}));
  }else if (path == '/logout') {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('ok');
  }
  else if(path == '/redirect') {
    res.writeHead(302, {
      'Location': '/1_test-values.json' });
    res.end();
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('not found');
  }
}).listen(8000, "localhost");
console.log('Server running at http://localhost:8000/');