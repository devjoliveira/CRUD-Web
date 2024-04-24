document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", () => {

        const form = document.querySelector("form")

        const tarefa = {
            titulo : form.titulo.value,
            descricao: form.descricao.value,
            pontos : form.pontos.value,
            status: 0
        }
        
        if(validar(tarefa)){
            console.log(tarefa)
            let tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
            tarefas.push(tarefa)
            localStorage.setItem("tarefas", JSON.stringify(tarefas))

            window.location = "/"
        }

})

function validar(tarefa){
    let valid = true
    limparErros()

    if (tarefa.titulo === ""){
        document.querySelector("#titulo").classList.add("has-text-danger")
        document.querySelector("#titulo-error").innerText = "O título é obrigatório"
        valid = false
    }
    if (tarefa.descricao === ""){
        document.querySelector("#descricao").classList.add("has-text-danger")
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatória"
        valid = false
    }
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("has-text-danger")
        document.querySelector("#pontos-error").innerText = "Pontos devem ser maior que zero"
        valid = false
    }

    return valid
}



function limparErros(){
    document
        .querySelectorAll(".input.has-text-danger, .textarea.has-text-danger")
        .forEach( campo => campo.classList.remove("has-text-danger"))

    document
        .querySelectorAll("span.has-text-danger")
        .forEach(span => span.innerText = "")
   
}