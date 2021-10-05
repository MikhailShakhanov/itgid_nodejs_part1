const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const urlParts = url.parse(req.url);
    if (req.method === 'GET') {
        switch (urlParts.pathname) {
            case '/main':
                main(req, res);
                break;
            case '/about':
                about(req, res);
                break;
            case '/cat':
                cat(req, res);
                break;
            default:
                page404(req, res);
                break;
        }
    }
}).listen(3000);

function main(req, res){
    res.end('main');
}

function about(req, res){
    res.end('about');
}

function cat(req, res){
    const urlRequest = url.parse(req.url, true);
    switch (urlRequest.query.lang) {
        case 'ru':
            res.end('ru');
            break;
        case 'en':
            res.end('en');
            break;
        default:
            res.end('en');
    }

}

function page404(req, res){
    res.end('404');
}