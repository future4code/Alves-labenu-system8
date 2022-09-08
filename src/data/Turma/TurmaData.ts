import BaseDataBase from "../BaseDataBase"
import { Turma } from "../../model/Turma"


class TurmaData extends BaseDataBase {

    async insertTurma(turma: Turma): Promise<void> {
       
        await this.getConnection()
            .insert({
                name: turma.getName(),
                modulo: turma.getModulo(),
            })
            .into("turma")
    }

    async selectAllTurmas(){
        const result = await this.getConnection().select("*").from("turma")

        return result
    }

    async selectTurmaById (id: string): Promise<any> {
        const result = await this.getConnection().where("id", id)

        return result
    }

    async updateModulo(id: number, modulo: number) {
        const result = await this.getConnection().update({modulo}).where({id}).from('turma')

        return result
    }
}

export default TurmaData