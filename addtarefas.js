'use strict';

function addTask() {
    var assuntoTarefa = document.getElementById('assuntoTarefa').value;
    var dataTarefa = document.getElementById('dataTarefa').value;
    var descricaoTarefa = document.getElementById('descricaoTarefa').value;
    var listaTarefas = document.getElementById('listaTarefa');

    if (assuntoTarefa === '' || dataTarefa === '' || descricaoTarefa === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var container = document.createElement('div');
    container.classList.add('containerTarefas')
    container.innerHTML = `
        <strong>${assuntoTarefa}</strong>
        <p>Data: ${dataTarefa}</p>
        <p>Descrição: ${descricaoTarefa}</p>
        <button onclick="removerTarefa(this)" class="teste">Remover</button>
    `;
    listaTarefas.appendChild(container);

    // Limpar os campos após adicionar a tarefa
    document.getElementById('assuntoTarefa').value = '';
    document.getElementById('dataTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
}

function removerTarefa(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}