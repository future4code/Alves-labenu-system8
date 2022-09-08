class Docente {
    private name: string;
    private email: string;
    private data_nasc: Date;
    private turma_id: number

    constructor(name: string, email: string, data_nasc: Date, turma_id: number){
        this.name = name;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getDataNasc(){
        return this.data_nasc
    }

    getTurmaId(){
        return this.turma_id
    }

}
export default Docente