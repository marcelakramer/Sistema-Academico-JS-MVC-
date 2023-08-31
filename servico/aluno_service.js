class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);

        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }

        if(idade < 18) {
            throw new Error('Aluno menor de idade!');
        }

        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
