import { Request, Response } from "express"
import DocenteData from "../data/DocenteData"
import Docente from "../model/docente"
import Docente_especialidade from "../model/docente_especialidade"

class endpointDocente {

    async createDocente(req: Request, res: Response) {
        try {
            const { name, email, data_nasc, turma_id, especialidades } = req.body

            if (!name || !email || !data_nasc || !turma_id) {
                throw new Error("Todos os dados devem ser passados!")
            }

            if (!especialidades.length) {
                throw new Error("É necessário inserir pelo menos uma especialidade")
            }

            const docente = new Docente(name, email, data_nasc, turma_id)

            const docenteData = new DocenteData()

            const anwser = await docenteData.insertDocente(docente)

            const getId = await docenteData.selectDocenteId()

            const getResult: Docente_especialidade[] = especialidades.map((especialidade: number) => {
                return new Docente_especialidade(getId, especialidade)
            })

            await docenteData.insertDocenteEspecialidade(getResult)

            res.status(201).send("Docente cadastrado com sucesso")
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async getDocente(req: Request, res: Response) {
        try {

            const docenteData = new DocenteData()

            const allDocentes = await docenteData.selectDocente()

            if (!allDocentes.length) {
                throw new Error("Não há nenhum docente cadastrado!")
            }

            res.status(200).send(allDocentes)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async editDocente(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id)
            const { turma_id } = req.body

            if (!turma_id) {
                res.statusCode = 400
                throw new Error("Envie um nome válido")
            }

            const docenteData = new DocenteData()

            const editTurma = await docenteData.updateDocente(id, turma_id)

            res.status(201).send({ message: "Docente alterado de turma com sucesso" })

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
        }
    }
}

export default endpointDocente