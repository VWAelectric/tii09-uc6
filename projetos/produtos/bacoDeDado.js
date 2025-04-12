import { Produto } from "./produto.js";

export class BancoDeDados {
    // CREATE
    static salvar(produto) {
        localStorage.setItem('produtos', JSON.stringify(produto));
    }
    // READ
    buscarTodos() {

    }

    buscarPorId (id) {
        
    }
    // UPDATE
    atualizar(produtoAtualizado) {

    }
    // DELETE
    excluir(id) {

    }
}