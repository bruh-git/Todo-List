let buttonCriarTarefa = document.getElementById("criar-tarefa");
let listaOrdenada = document.querySelector('#lista-tarefas');
let arrayList = document.querySelectorAll("li");



function add(){
    let inputTextoTarefa = document.getElementById('texto-tarefa');
    let li = document.createElement('li'); 
    // li.className = "task";
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
// remove tudo

let buttonApagaTudo = document.querySelector('#apaga-tudo');

buttonApagaTudo.addEventListener('click', deleteAll)

function deleteAll(){
    listaOrdenada.innerHTML = ''
}
// remove finalizados
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes

let buttomRemoverFinalizados = document.querySelector('#remover-finalizados');

buttomRemoverFinalizados.addEventListener('click', function(){
    let allItems = listaOrdenada.childNodes;
    // explicação desse for no grupo de whatsapp das mulheres da turma 19
    // assim começa removendo do ultimo elemento ate chegar no primeiro, para não correr o risco de serem renumerados
    for (let i=allItems.length-1;i>=0;i-=1){
        if (allItems[i].classList.contains('completed')){
            listaOrdenada.removeChild(allItems[i]);
        }
    }
})

let buttomRemoverSelecionados = document.querySelector("#remover-selecionado");

buttomRemoverSelecionados.addEventListener('click', function(){
    let items = listaOrdenada.childNodes;
    for (let i=items.length-1;i>=0;i-=1){
        if (items[i].classList.contains('selected')){
            listaOrdenada.removeChild(items[i]);
        }
    }
})