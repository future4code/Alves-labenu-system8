class Estudant {
    private nomeEstudant: string;
    private emailEstudant: string;
    private dataNascEstudant: string;
    private turmaIdEstudant: number;
    constructor(nomeEstudant: string, emailEstudant: string, dataNascEstudant: string, turmaIdEstudant: number) {
        this.nomeEstudant = nomeEstudant
        this.emailEstudant = emailEstudant
        this.dataNascEstudant = dataNascEstudant
        this.turmaIdEstudant = turmaIdEstudant
    }
    getnomeEstudant() {
        return this.nomeEstudant
    }
    getemailEstudant() {
        return this.emailEstudant
    }
    getDataNascEstudant() {
        return this.dataNascEstudant
    }
    getturmaIdEstudant() {
        return this.turmaIdEstudant
    }
}
export default Estudant