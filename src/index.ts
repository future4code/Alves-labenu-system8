import app from "./app";
import endpointDocente from "./endpoints/endpointDocente";

const endpointsDocente = new endpointDocente()

app.post("/docente", endpointsDocente.createDocente)

app.get("/docente",endpointsDocente.getDocente)

app.put("/docente/:id", endpointsDocente.editDocente)