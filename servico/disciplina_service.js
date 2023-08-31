class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);

        if(disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        } 

        const disciplina = new Disciplina(codigo, nome);

        this.repositorio.inserir(disciplina);

        return disciplina;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio
            .listar()
            .filter((disciplina) => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.pesquisarPorCodigo(codigo);

        if(disciplina.length == 0) {
            throw new Error('Disciplina não encontrada!');
        }

        disciplina[0].alunos.push(aluno);
    }

    atualizar(codigo, novoNome) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        if(disciplina.length > 0) {
            this.repositorio.atualizar(codigo, novoNome);
        } else {
            throw new Error('Disciplina não encontrada!');
        }
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }
}