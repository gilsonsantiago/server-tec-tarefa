const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

/** ******************  COMPETENCIA *************************** */
app.get("/", (req, res) => {
  res.json({
    message: "IFPB. API do Aplicativo Financeiro. - TCC. Rodando...",
  });
});

/** ******************  COMPETENCIA *************************** */
app.get("/competencia", (req, res) => {
  
  const arquivo = fs.readFileSync("Competencia.json", "utf-8");

  lista = JSON.parse(arquivo);

  res.json(lista);
});

app.post("/competencia", (req, res) => {
  let compete = {
    key: req.body.key,
    ano: req.body.ano,
    mes: req.body.mes,
  };

  dado = gravaCompetencia(compete);

  return res.json(dado);
});

function gravaCompetencia(dado) {
  
  const arquivo = fs.readFileSync("Competencia.json", "utf-8");

  lista = JSON.parse(arquivo);

  lista = [...lista, dado];

  fs.writeFileSync("Competencia.json", JSON.stringify(lista));

  return dado;
}

/** **************** CONTAS  ******************************** */

app.get("/contas", (req, res) => {
  
  const arquivo = fs.readFileSync("Contas.json", "utf-8");

  lista = JSON.parse(arquivo);

  res.json(lista);
  
});

app.post("/contas", (req, res) => {
  let cta = {
    id: req.body.id,
    descricao: req.body.descricao,
    tipo: req.body.tipo,
    saldo: req.body.saldo,
  };

  dado = gravaContas(cta);

  return res.json(dado);
  
});

function gravaContas(dado) {
  
  const arquivo = fs.readFileSync("Contas.json", "utf-8");

  lista = JSON.parse(arquivo);

  lista = [...lista, dado];

  fs.writeFileSync("Contas.json", JSON.stringify(lista));

  return dado;
}

/** **************** LANCAMENTOS  ******************************** */

app.get("/lancamentos", (req, res) => {
  
  const arquivo = fs.readFileSync("Lancamentos.json", "utf-8");

  lista = JSON.parse(arquivo);

  res.json(lista);
  
});

app.post("/lancamentos", (req, res) => {
  let movto = {
    id: req.body.id,
    id_competencia: req.body.id_competencia,
    id_conta: req.body.id_conta,
    data: req.body.data,
    valor: req.body.valor,
  };

  dado = gravaLancamento(movto);

  return res.json(dado);
});

function gravaLancamento(dado) {
  const arquivo = fs.readFileSync("Lancamentos.json", "utf-8");

  lista = JSON.parse(arquivo);

  lista = [...lista, dado];

  fs.writeFileSync("Lancamentos.json", JSON.stringify(lista));

  return dado;
}


/** **************** USUARIOS  ******************************** */

app.get("/usuario", (req, res) => {

  const arquivo = fs.readFileSync("Usuario.json", "utf-8");

  lista = JSON.parse(arquivo);

  res.json(lista);

});

app.post("/usuario", (req, res) => {
  let user = {
    id: req.body.id,
    nome : req.body.nome,
    login: req.body.login,
    senha: req.body.senha,
    status: req.body.status,
  };

  dado = gravaUsuario(user);

  return res.json(dado);
});

function gravaUsuario(dado) {
  
  const arquivo = fs.readFileSync("Usuario.json", "utf-8");

  lista = JSON.parse(arquivo);

  lista = [...lista, dado];

  fs.writeFileSync("Usuario.json", JSON.stringify(lista));

  return dado;
}

/** ******************************************** */
app.listen(3000, () => {
  console.log("api is running locally...");
});

/** ********************************************* */