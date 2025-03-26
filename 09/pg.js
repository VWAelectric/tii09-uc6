//OBJETOS: CONTÉM MÉTODOS E ATRIBUTOS

//OBJETO LITERAL

let carroA = { marca: "Chevrolet", modelo: "Chevette" };
let carroB = {
    marca: "Fiat",
    modelo: "Fiat 147",
    ano: 1986,
    combustivel: "Gasolina",
    ligar: function () {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
};

let carros = [carroA, carroB]; //Array de diferentes carros

console.log(carroA.marca); //Chevrolet
console.log(carroB.modelo); //Fiat-147
console.log(carroB.ligar());
// console.log(carroA.ligar()); // ERRO: carroA.ligar() não é uma função do objeto
