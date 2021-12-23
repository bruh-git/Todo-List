let buttonCriarTarefa = document.getElementById("criar-tarefa");
let listaOrdenada = document.querySelector('#lista-tarefas');
let arrayList = document.querySelectorAll("li");



function add(){
    let inputTextoTarefa = document.getElementById('texto-tarefa');
    let li = document.createElement('li'); 
    li.className = "task";
    li.innerText = inputTextoTarefa.value;
    listaOrdenada.addEventListener('click', seleciona);
    listaOrdenada.addEventListener('dblclick', concluida);
    listaOrdenada.appendChild(li);
    // limpa o input
    inputTextoTarefa.value = '';
}
buttonCriarTarefa.addEventListener('click', add);

// adicionar o eventListener em todos os itens do li adicionados
function seleciona(event){
    const liList = event.target;
    const classSelected = document.querySelector('.selected');
    if (classSelected){
        classSelected.classList.remove('selected');
    }
    liList.classList.add('selected');
}
function concluida(event){
   const liList = event.target;
   liList.classList.toggle('completed');
}
// remove filhos 

let buttonApagaTudo = document.querySelector('#apaga-tudo');

buttonApagaTudo.addEventListener('click', deleteAll)

function deleteAll(){
    listaOrdenada.innerHTML = ''
}
