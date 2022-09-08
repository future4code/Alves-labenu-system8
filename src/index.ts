import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import ControllerEstudant from "./endpoints/ControllerEstudant";
import app from "./app";
import TurmaController from "./endpoints/Turma/TurmaController";
import endpointDocente from "./endpoints/endpointDocente";


const estudantController = new ControllerEstudant()
const turmaController = new TurmaController()
const endpointsDocente = new endpointDocente()

// metodo de cadastrar Usuario
app.post("/estudant", estudantController.createEstudante)

// metodo de buscar por todos os usuários
app.get("/estudants/:name", estudantController.getEstudant)

app.put("/estudant/:id",estudantController.editEstudant)




app.post("/docente", endpointsDocente.createDocente)

app.get("/docente",endpointsDocente.getDocente)

app.put("/docente/:id", endpointsDocente.editDocente)


// Criar Turma
app.post('/turma', turmaController.createTurma)

// Acessar Turmas
app.get('/turma', turmaController.getAllTurmas)

// Editar Turma
app.put('/turma/:id', turmaController.changeModulo)

