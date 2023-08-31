class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector('#codigo');
        const nomeElemento = document.querySelector('#nome');
        const codigo = Number(codigoElemento.value);
        console.log(codigo);
        const disciplinaInserida = this.servico.inserir(codigo, nomeElemento.value);
        console.log(disciplinaInserida);
        const listaDisciplinaElemento = document.querySelector('#listaDisciplinas');
        
        if(disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement('li');
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;

        elementoDestino.appendChild(disciplinaElemento);
    }
}