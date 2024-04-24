console.log("carregar dados")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( (tarefa) => {
    const card = document.createElement("div")
    card.id = tarefa.titulo
    card.classList.add("box")

    card.innerHTML = `
                    <span class="is-size-4">${tarefa.titulo}</span>
                    <p>${tarefa.descricao}</p>
                    <br />
                    <span>Pontos a serem contabilizados: ${tarefa.pontos}</span>
                    <progress class="progress is-success" value="${tarefa.status}" max="100"></progress>
                    
                    <div class="is-flex is-justify-content-center">
                    <button onClick="dec('${tarefa.titulo}')" type="button" class="button">-</button>
                    <button onClick="apagar('${tarefa.titulo}')" type="button" class="button is-danger">Deletar</button>
                    <button onClick="inc('${tarefa.titulo}')" type="button" class="button">+</button>
                    `


    document.querySelector("#lista-de-tarefas").appendChild(card)
})

atualizar()