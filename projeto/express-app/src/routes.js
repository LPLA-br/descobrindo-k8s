// ROTAS SATOR
import { Router } from "express";

const ROTAS = new Router('/');

ROTAS.get('/', (req, res) => {
  res.render('index',{});
});

export { ROTAS };
