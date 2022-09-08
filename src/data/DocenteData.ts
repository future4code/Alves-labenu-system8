import Docente from "../model/docente";
import Docente_especialidade from "../model/docente_especialidade";
import BaseDataBase from "./BaseDataBase";

class DocenteData extends BaseDataBase {

    async insertDocente(docente: Docente): Promise<void> {
       
        await this.getConnection()
            .insert({
                name: docente.getName(),
                email: docente.getEmail(),
                data_nasc: docente.getDataNasc(),
                turma_id: docente.getTurmaId()
            })
            .into("docente")
    }

    async insertDocenteEspecialidade(docente_especialidades: Docente_especialidade[]): Promise<void> {
       
        await this.getConnection()
            .insert(docente_especialidades)
            .into("docente_especialidade")
    }

    async selectDocente(){
        const result = await this.getConnection().select("*").from("docente")

        return result
    } 

    async selectDocenteId(): Promise<number>{
        const result = await this.getConnection().max("id").from("docente") as any

        return result[0]["max(`id`)"]
    } 

    async updateDocente(turma_id: number, id: number){
        const result = await this.getConnection().update({turma_id}).where({id}).from('docente')
        
        return result
    }
}

export default DocenteData