const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const mysql = require('mysql');

// конфигурация

const conn = mysql.createConnection({
    host: "127.0.0.1", //127.0.0.1
    user: "root",
    database: "itgid_nodecourse",
    password: ""
});

const doConnect = () => {
    conn.connect( err => {
        if (err) {
            console.log(err);
            return err;
        }
        else {
            console.log('Database ----- OK');
        }
    });
}

const doDisconnect = () => {
    conn.end( err => {
        if (err) {
            console.log(err);
            return err;
        }
        else {
            console.log('Database ----- Close');
        }
    });
}

doConnect();

http.createServer((req, res) => {
    if(req.method === 'GET'){
        const urlRequest = url.parse(req.url, true);
        switch (urlRequest.query.task) {
            case '2':
                task2(res);
                break;
            case '3':
                task3(res);
                break;
            case '4':
                task4(urlRequest.query.email, res);
                break;
            case '5':
                task5(urlRequest.query.email, res);
                break;
            default:
                res.end('404');
        }
    } else {
        res.end('404');
    }

}).listen(3000);

const doQuery = (query, resFun, res) => {
    conn.query(query, (err, result, field) =>{
        console.log(err);
        console.log(result);
        const resultString = resFun(result);
        console.log('>>resultString: ', resultString);
        res.end(resultString);
    });
}


const task2 = (res) => {
    const query="SELECT firstname FROM user";
    doQuery(query, task2_3ResultFun, res);
}

const task3 = (res) => {
    const query="SELECT email FROM user";
    doQuery(query, task2_3ResultFun, res);
}

const task4 = (email, res) => {
    const query=`SELECT id FROM user WHERE email='${email}'`;
    doQuery(query, task4ResultFun, res);
}

const task5 = (email, res) => {
    const query=`SELECT id FROM user WHERE email LIKE '%${email}%'`;
    doQuery(query, task5ResultFun, res);
}

const task2_3ResultFun = (res) => {
    return JSON.stringify( res );
}

const task4ResultFun = (res) => {
    return res.length ? ''+res[0].id : '0';
}

const task5ResultFun = (res) => {
    return JSON.stringify( res.map( item => item.id ) );
}
