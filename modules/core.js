const http = require('http')
const url = require('url')

http.createServer(function(req,res){
    console.log(req.url)
    const address = 'http://localhost:3001' + req.url
    const urlParser = url.parse(address, true)
    responseObj = {
        host : urlParser.host,
        pathname : urlParser.pathname,
        search : urlParser.search
    }
    if(req.url == '/'){
    res.end(JSON.stringify(responseObj))
    } else if(req.url == '/user') {
        res.end("<h1><i>Welcome User</i></h1>")
    } else{
        res.end("<h1><i>Welcome Guest</i></h1>")
    }
}).listen(3001)


// const url = require('url')
// var address = "http://localhost:8080/default.htm?year=2017&month=february";
// var urlParser = url.parse(address, true);

//console.log(urlParser.host)
//console.log(urlParser.pathname)
//console.log(urlParser.query.month)
//console.log(urlParser.query.year)
