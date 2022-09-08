class Estudant_Hobbie {
    private estudante_id: number
    private hobby_id: number

    constructor(estudante_id: number, hobby_id: number) {
        this.estudante_id = estudante_id;
        this.hobby_id = hobby_id
    }

    getEstudanteId() {
        return this.estudante_id
    }

    getHobbyId() {
        return this.hobby_id
    }

}
export default Estudant_Hobbie