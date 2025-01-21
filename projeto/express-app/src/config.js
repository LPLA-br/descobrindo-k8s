/*****************************
 * Configuração do express
 * para portfólio
 *****************************/
import express from "express";
import { ROTAS } from "./routes.js";

/*outros middlewares como: cookie-parser, cookie-session ...
 https://expressjs.com/en/resources/middleware.html */

const app = express();
const PORTA = 8080;

app.use('/',ROTAS);

const options = {
  dotfiles: 'ignore',
  index: "index.html",
  maxAge: '10800',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.set('view engine', 'pug');

// tratamento de url do express
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

export { app, PORTA };
