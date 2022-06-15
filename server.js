#!/usr/bin/env node

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
// const hostname = '127.0.0.1'
// const port = 3000


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
   } 
   else if (page == '/images/aquarius.png'){             
    fs.readFile('./images/aquarius.png', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
}else if (page == '/images/aries.png'){             
  fs.readFile('./images/aries.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/cancer.png'){             
  fs.readFile('./images/cancer.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/capricorn.png'){             
  fs.readFile('./images/capricorn.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/gemini.png'){             
  fs.readFile('./images/gemini.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/leo.png'){             
  fs.readFile('./images/leo.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/libra.png'){             
  fs.readFile('./images/libra.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/pisces.png'){             
  fs.readFile('./images/pisces.png', function(err, data) {
      res.writeHead(200, {'Content-Type':'image/png'});
      res.write(data);
      res.end();
  })
}else if (page == '/images/sagittarius.png'){             
    fs.readFile('./images/sagittarius.png', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/images/scorpio.png'){             
    fs.readFile('./images/scorpio.png', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/images/taurus.png'){             
    fs.readFile('./images/taurus.png', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/images/virgo.png'){             
    fs.readFile('./images/virgo.png', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/images/Zodiac3.jpg'){             
    fs.readFile('./images/Zodiac3.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/images/Zodiac1.jpg'){             
    fs.readFile('./images/Zodiac1.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type':'image/png'});
        res.write(data);
        res.end();
    })
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/reset.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
