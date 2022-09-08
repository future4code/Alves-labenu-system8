import Docente from "./model/docente"
import { userDocente } from "./types"

export const typeDocente = (docente: any) => {

    const createDocente: userDocente = {
        id: docente.id,
        name: docente.name,
        email: docente.email,
        data_nasc: docente.data_nasc,
        turma_id: docente.turma_id
    }

    return createDocente
}