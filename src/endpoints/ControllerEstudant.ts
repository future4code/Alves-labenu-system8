import { Request, Response } from "express";
import EstudantData from "../data/EstudantData";
import Estudant from "../model/Estudant";
import Estudant_Hobbie from "../model/Estudant_Hobbie";


class ControllerEstudant {

    async createEstudante(req: Request, res: Response) {
        try {
            const { name, email, data_nasc, turma_id, hobby } = req.body
            if (!name || !email || !data_nasc || !turma_id) {
                res.status(400).send("Todos os parametros devem ser passados!")
            }
            const estudant = new Estudant(name, email, data_nasc, turma_id)
            const estudantData = new EstudantData()
            const anwser = await estudantData.insertTurma(estudant)
            const getId = await estudantData.selectEstudantId()
            const getResult: Estudant_Hobbie[] = hobby.map((hobby: number) => {
                return new Estudant_Hobbie(getId, hobby)
            })
            await estudantData.insertHobbyEstudant(getResult)

            res.status(201).send({ message: anwser })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async getEstudant(req: Request, res: Response) {
        try {
            const name = req.params.name
            console.log(name)
            const userData = new EstudantData()
            const allEstudant = await userData.selectEstudantforName(name)
            if (!allEstudant.length) {
                res.status(404).send("Usuario não encontrado!")
            }
            res.status(200).send(allEstudant)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async editEstudant(req: Request, res: Response) {
        try {
            const id: number = +(req.params.id)
            const { turma_id } = req.body
            if (!turma_id) {
                res.status(404).send("Turma não encontrada!")
            }
            const estudantData = new EstudantData()
            const editEstudant = await estudantData.updateEstudant(turma_id, id)
            res.status(200).send({ message: "Estudante modificado com sucesso!" })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default ControllerEstudant