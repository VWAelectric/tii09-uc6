//// Classe: são "moldes" para criar objetos com a mesma estrutura.

class Carro {
    marca = "";
    modelo = "";
    ano = 0;
    combustivel;

    constructor(marca, modelo, ano, combustivel){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel;
    }

    ligar() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
}

///Criando objetos a partir da classe Carro (instância de classe)
let carro1 = new Carro();
carro1.marca = "Ford";
carro1.modelo = "Belina";
carro1.ano = 1980;
carro1.combustivel = "Gasolina";

console.log(carro1.modelo) //Belina
carro1.ligar();

let carro2 = new Carro("Ford", "Mustang", 1969, "Gasolina") //Função construtora
console.log(carro2.ano) // 1969 
carro2.ligar();