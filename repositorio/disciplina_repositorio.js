class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    listar() {
        return this.disciplinas;
    }

    atualizar(codigo, novoNome) {
        const codigoDisciplinaAAtualizar = this.disciplinas.findIndex(
            (disciplina) => {
                disciplina.codigo === codigo;
            }
        )

        if(codigoDisciplinaAAtualizar > -1) {
            this.disciplinas[codigoDisciplinaAAtualizar].nome = novoNome;
        }
    }

    remover(codigo) {
        const codigoDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (codigoDisciplinaARemover > -1) {
            this.disciplinas.splice(codigoDisciplinaARemover, 1);
        }
    }
}
