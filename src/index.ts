import app from "./app";
import TurmaController from "./endpoints/Turma/TurmaController";

// Instancia de classe
const turmaController = new TurmaController()

// Criar Turma
app.post('/turma', turmaController.createTurma)

// Acessar Turmas
app.get('/turma', turmaController.getAllTurmas)

// Editar Turma
app.put('/turma/:id', turmaController.changeModulo)

