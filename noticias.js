var http = require('http');

var server = http.createServer((req, res) => {

    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body>tec</body></html>");
    } else if (categoria == '/moda') {
        res.end("<html><body>moda</body></html>");
    } else if (categoria == '/beleza') {
        res.end("<html><body>beleza</body></html>");
    } else {
        res.end("<html><body>Testando</body></html>");
    }

});

server.listen(3001);