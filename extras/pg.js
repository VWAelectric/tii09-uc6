function adicionarItem() {
    const nome = document.getElementById("itemNome").value;
    if (!nome) return;


    localStorage.setItem(Date.now(), nome);

    exibirItens();
}

function salvarItens(lista) {
    localStorage.setItem("itens", JSON.stringify(lista));
}

function exibirItens() {
    console.log(lista);
}

function buscarItem() {
    let dadosEmJason = localStorage.getItem("itens");
    dadosConvertidos = JSON.parse(dadosEmJason);
    return dadosConvertidos;
}