import app from "./app";
import TurmaController from "./endpoints/Turma/TurmaController";
import endpointDocente from "./endpoints/endpointDocente";

const endpointsDocente = new endpointDocente()
// Instancia de classe
const turmaController = new TurmaController()


app.post("/docente", endpointsDocente.createDocente)

app.get("/docente",endpointsDocente.getDocente)

app.put("/docente/:id", endpointsDocente.editDocente)


// Criar Turma
app.post('/turma', turmaController.createTurma)

// Acessar Turmas
app.get('/turma', turmaController.getAllTurmas)

// Editar Turma
app.put('/turma/:id', turmaController.changeModulo)

