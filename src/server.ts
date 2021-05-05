import express from "express";

const app = express();

/**
 * Métodos:
 * GET = busca
 * POST = salvar
 * PUT = alterar
 * DELETE = deletar
 * PATCH = altetação expecífica
 */

//GET Method (app.metodo("rota ou recurdo", (request, response)))

app.get("/",(request, response) => {
    //return response.send("Hello world - NLW!");
    return response.json({message:"Hello world - NLW!"});
})

app.listen(3333, () => console.log ("Server is running!!!")); 

// POST Method (app.metodo("rota ou recurdo", (request, response)))

app.post("/", (request, response) => {
    //Após dados recebidos...
    return response.json({message:"Dados recebidos com sucesso!"});
})