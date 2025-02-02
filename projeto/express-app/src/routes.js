// ROTAS SATOR
import { Router } from "express";
import * as mysql2 from "mysql2";

const ROTAS = new Router('/');

ROTAS.get('/', (req, res) => {
  res.render('index',{});
});

ROTAS.post('/nota', (req,res)=>
{
  try
  {
    const conexao = mysql2.createConnection(
    {
      host:     process.env.HOST,
      user:     process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.BANCODEDADOS,
      port:     process.env.PORTATCP
    });
    conexao.connect();
    conexao.query(`USE ${process.env.BANCODEDADOS}`);
    conexao.query(`CREATE TABLE IF NOT EXISTS notas (texto VARCHAR(255))`);
    if ( req.body?.texto )
    {
      try
      {
        let consulta = "INSERT INTO `notas`(`texto`) VALUES (?)";
        conexao.execute( consulta, [req.body?.texto], function (err, results, fields)
        {
          if( err ) res.render('create',{mensagem: "Inserção falhou"});
          else res.render('create',{mensagem: "Recurso Criado !"});
        });
      }
      catch( err )
      {
        console.log( err );
        res.render('create',{mensagem: "Inserção falhou"});
      }
    }
    else
    {
      res.render('create',{mensagem: "Campo texto ausente: Falhou"});
      console.log("campo \"texto\" ausente");
    }
    conexao.end();
  }
  catch( globalPostRouteError )
  {
    console.log(globalPostRouteError);
    res.render('create',{mensagem:"Erro\n\n"+globalPostRouteError.toString()});
  }
});

ROTAS.get('/notas', (req, res)=>
{
  try
  {
    const conexao = mysql2.createConnection(
      {
        host:     process.env.HOST,
        user:     process.env.USUARIO,
        password: process.env.PASSWORD,
        database: process.env.BANCODEDADOS,
        port:     process.env.PORTATCP
      });

    conexao.connect();
    conexao.query(`USE ${process.env.BANCODEDADOS}`);
    conexao.query(`CREATE TABLE IF NOT EXISTS notas (texto VARCHAR(255))`);
    conexao.query('SELECT texto FROM notas', (error, results, fields)=>
    {
      if ( error ) res.json({erro: error});
      else res.json(results);
    });

    conexao.end();
  }
  catch (erro)
  {
    console.log(erro);
    res.render('create',{mensagem: "Consulta falhou\n\n"+erro.toString()});
  }
});

export { ROTAS };
