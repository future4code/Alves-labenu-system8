class Docente_especialidade {
    private docente_id: number
    private especialidade_id: number

    constructor(docente_id: number, especialidade_id: number) {
        this.docente_id = docente_id;
        this.especialidade_id = especialidade_id
    }

    getDocenteId() {
        return this.docente_id
    }

    getEspecialidadeId() {
        return this.especialidade_id
    }

}
export default Docente_especialidade