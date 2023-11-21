function salvar(texto){
    window.localStorage.setItem('teste', texto)
}

document.getElementById('inputTexto').addEventListener('blur', (Event)=>{
    salvar(Event.target.value)
})

//localStorage e sessionStorage tem todos esses valores
//setItem() = serve para registrar um valor associado a chave
//getItem() = irá pegar esse valor por meio da chave
//removeItem() = irá remover o valor associado a chave
//clear() = permite limpar todos os valores armazenados do sessionStorage e localStorage