const http = require('http');
const url = require('url');
const { parse } = require('querystring');


const t2 = (req, res) => {
    const urlRequest = url.parse(req.url, true);
    if (urlRequest.query.p === '70'){
        res.end('800');
    }
}

const t3 = (req, res) => {
    const urlRequest = url.parse(req.url, true);
    if (urlRequest.query.p === '80'){
        res.end('900');
    }
}

const t4 = (req, res) => {
    res.end('1100');
}

const t5 = (req, res) => {
    res.end('1200')
}

http.createServer((req, res) => {
    if(req.method === 'GET'){
        const urlRequest = url.parse(req.url, true);
        if(urlRequest.query.p === '70'){
            t2(req, res);
        }
        else if(urlRequest.query.p === '80'){
            t3(req, res);
        } 
        else res.end('404');
    }

    else if(req.method === 'POST') {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const params = parse(body);
            if(params.h === '80'){
               t4(req, res);
            }
            else if(params.h === '90'){
               t5(res, res);
            }
            else res.end('404');
            
        })
    }

    else res.end('404');


}).listen(3002);
