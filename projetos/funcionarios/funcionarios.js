class Funcionario {
    _nomeCompleto;
    _numeroDeMatricula;
    _anoDeAdmicao;
    _enderecoResidencial

    constructor(nome, admicao, matricula, endereco) {
        this._nomeCompleto = nome;
        this._numeroDeMatricula = matricula;
        this._anoDeAdmicao = admicao;
        this._enderecoResidencial = endereco;
    }

    receberSalario(valor) {
        let salario = valor;
        console.log(`${this._nomeCompleto} recebe o valor de R$ ${salario}`);
    }

    tempoDeEmpresa(anoAtual) {
        anoAtual -= this._anoDeAdmicao;
        console.log(`${this._nomeCompleto} tem ${anoAtual} anos trabalhados`)
    }

    baterPonto(horarioAtual) {
        console.log(``)
    }
}

let salario1 = new Funcionario("Clodoaldo Anonio da Silva", 1998, 1234, "abcd");
salario1.receberSalario(1200);
salario1.tempoDeEmpresa(2025);
