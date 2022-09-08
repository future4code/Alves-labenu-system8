import { Request, Response } from "express"
import TurmaData from "../../data/Turma/TurmaData"
import { Turma } from "../../model/Turma"

class TurmaController {

    async createTurma(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, modulo } = req.body

            if (!name) {
                errorCode = 422
                throw new Error("Informe um nome para a turma")
            }

            // instancia de turma
            const novaTurma = new Turma(name, modulo)
            const turmaData = new TurmaData()
            //

            const answer = await turmaData.insertTurma(novaTurma)

            res.status(201).send({ message: `Nova turma "${name}" criada com sucesso!` })

        } catch (error: any) {
            res.status(errorCode).send(error.message || error.sqlMessage)
        }
    }

    async getAllTurmas(req: Request, res: Response) {
        try {

            const turmaData = new TurmaData()

            const allTurmas = await turmaData.selectAllTurmas()

            if (!allTurmas.length) {
                throw new Error("Não há nenhum usuario cadastrado!")
            }

            res.status(200).send(allTurmas)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async changeModulo(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id)
            const { modulo } = req.body

            if (!modulo) {
                throw new Error("Informe um novo modulo")
            }

            const turmaData = new TurmaData()

            const editTurma = await turmaData.updateModulo(id, modulo)

            res.status(201).send({ message: `A turma de Id ${id} teve o modulo alterado para ${modulo}` })
            
        } catch (error:any) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default TurmaController
