const http = require("http");
const url = require("url");

http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true);
  console.log("Nova Request", reqUrl.pathname);
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  if ( reqUrl.pathname == "/feed") {
    if( reqUrl.query.order == "asc") {
      response.end("<h1><li>1</li><li>2</li><li>3</li></h1>")
    } else if ( reqUrl.query.order == "desc") {
      response.end("<h1><li>3</li><li>2</li><li>1</li></h1>")
    } else {
      response.end();
    }
    } else if ( reqUrl.pathname == "/home") {
      let name = reqUrl.query.nome;
      if (name) {
        response.end("<h1>Olá, " + name + ". Seja bem vindo(a)!</h1>")
      } else {
        response.end("<h1>Olá, seja bem vindo!</h1>")
      }
    } else if (reqUrl.pathname == "/settings") {
    console.log(reqUrl.query);
    if (reqUrl.query.senha == "000") {
      response.end("<h1>Configurações<h1>");
    } else {
      response.statusCode = 403;
      response.end();
    }
   } else {
    response.end();
   }
  }).listen(8000);
//testes
//localhost:8000/settings?senha=123
//localhost:8000/home?nome=Vanessa
//localhost:8000/feed?order=desc