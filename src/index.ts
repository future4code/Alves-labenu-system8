import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import ControllerEstudant from "./endpoints/ControllerEstudant";


const app: Express = express()
app.use(express.json())
app.use(cors())

// instanciei a classe
const estudantController = new ControllerEstudant()

// metodo de cadastrar Usuario
app.post("/estudant", estudantController.createEstudante)

// metodo de buscar por todos os usuários
app.get("/estudants/:name", estudantController.getEstudant)

app.put("/estudant/:id",estudantController.editEstudant)





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});













