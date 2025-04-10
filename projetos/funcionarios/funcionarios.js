class Funcionario {
    _nomeCompleto;
    _numeroDeMatricula;
    _anoDeAdmicao;
    _enderecoResidencial
    _horasPonto = new Date().getHours();
    _minutosPonto = new Date().getMinutes();

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

    baterPonto() {
        console.log(`Ponto registrado para ${this._nomeCompleto} às ${this._horasPonto}:${this._minutosPonto} hrs`);
    }
}

class Gerente extends Funcionario{
    _autorizacaoDeDespesas;

    constructor(nome, admicao, matricula, endereco, autorizacao) {
        super(nome, admicao, matricula, endereco);
        this._autorizacaoDeDespesas = autorizacao;
    }

    autorizacaoDaGerencia(valor) {
        if(valor > 2000){
            console.log(`Valor acima do permitido, não autorizado`)
        }
    }
}

class OperadorDeCaixa extends Funcionario {

}

class Estagiario extends Funcionario {

}

let funcionario1 = new Funcionario("Clodoaldo Anonio da Silva", 1998, 1234, "abcd");
funcionario1.receberSalario(1200);
funcionario1.tempoDeEmpresa(2025);funcionario1.baterPonto(19);
let gerencia = new Gerente ("Carlos Alberto Silva", 2000, 4567, "Rua Beco");
gerencia.autorizacaoDaGerencia(3000);


