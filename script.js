let buttonCriarTarefa = document.getElementById('criar-tarefa');
let listaOrdenada = document.getElementById("lista-tarefas");

buttonCriarTarefa.addEventListener('click', add);

function add(){
    let inputTextoTarefa = document.getElementById('texto-tarefa');
    let li = document.createElement('li');  
    li.innerText = inputTextoTarefa.value;
    listaOrdenada.appendChild(li);
    inputTextoTarefa.value = '';
}

// li.addEventListener('click', seleciona);
// li.addEventListener('dbclick', concluida); 

// li.addEventListener('click',grayBackground);

// function grayBackground (){
//     document.querySelectorAll('')
// }