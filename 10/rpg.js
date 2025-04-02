class Personagem {
    _nome;
    _forca;
    _pontosDeVida;
    _vivo; //valor booleano

    constructor(nome, forca,vida) {
        this._nome = nome;
        this._pontosDeVida = vida;
        this._forca = forca;
        this._vivo = true;
    }
    

    atacar(inimigo) {
        if(this._vivo) {
            console.log(`O ${this._nome} atacou!`);
            inimigo.tomarDano(this._forca);
        } else {
            console.log(this._nome, "Morto, não pode mais atacar");
        }
    }
    tomarDano(valor) {
        if (valor >= 0) {
            this._pontosDeVida -= valor;
            console.log(`${this._nome} recebeu ${valor} de dano!`);
            if (this._pontosDeVida <= 0) {
                this.morrer();
            }
        } else {
            console.log("Valor inválido!");
        }
    }
    recuperarVida(valor) {
        if (valor > 0 && this._vivo) {
            this._pontosDeVida += valor;
            console.log(`${this._nome} recebeu ${valor} de vida!`);
        } else {
            console.log("Valor inválido!");
        }
    }
    morrer() {
        this._vivo = false;
        console.log(`O ${this._nome} morreu!`);
    }
}
class Guerreiro extends Personagem {
    // Ao tomar dano, é reduzido em 5 por conta do escudo;
    // tomarDano() {
    //     super.tomarDano();
    //     console.log("Mas, esse dano foi reduzido em Y");
    // }
    if(tomarDano) {

    }
}
class Mago extends Personagem {
// Ao atacar, reduz 5 da própria vida, para fazer um ataque
}

let personagem1 = new Guerreiro("Connan", 200, 250);
personagem1.tomarDano();
