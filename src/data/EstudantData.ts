import { NOMEM } from "dns";
import Estudant from "../model/Estudant";
import Estudant_Hobbie from "../model/Estudant_Hobbie";
import BaseDataBase from "./BaseDataBase";


class EstudantData extends BaseDataBase {
    async insertTurma(estudant: Estudant): Promise<any> {
        await this.getConnection()
            .into("estudante")
            .insert({
                name: estudant.getnomeEstudant(),
                email: estudant.getemailEstudant(),
                data_nasc: estudant.getDataNascEstudant(),
                turma_id: estudant.getturmaIdEstudant(),
            })
    }


    async insertHobbyEstudant(estudant_hobby: Estudant_Hobbie[]): Promise<void> {
        await this.getConnection()
            .insert(estudant_hobby)
            .into("estudante_hobby")
    }
    async selectEstudantId(): Promise<number> {
        const result = await this.getConnection().max("id").from("estudante") as any

        return result[0]["max(id)"]
    }


    async selectEstudantforName(name: string) {
        const result = await this.getConnection()
            .select("*")
            .where("name",name)
            .from("estudante")
        return result
    }
    async selectAllEstudant() {
        const result = await this.getConnection()
            .select("name")
            .from("hobby")
        return result
    }

    async updateEstudant(turma_id: number, id: number) {
        const result = await this.getConnection()
            .update({ turma_id })
            .where({ id })
            .from("estudante")
        return result
    }
}
export default EstudantData