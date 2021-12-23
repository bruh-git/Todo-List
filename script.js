let buttonCriarTarefa = document.getElementById("criar-tarefa");
let listaOrdenada = document.querySelector('#lista-tarefas');
let arrayList = document.querySelectorAll("li");
let task = document.querySelectorAll(".task");



buttonCriarTarefa.addEventListener('click', add);
function add(){
    let inputTextoTarefa = document.getElementById('texto-tarefa');
    let li = document.createElement('li'); 
    li.className = "task";
    li.innerText = inputTextoTarefa.value;
    listaOrdenada.appendChild(li);
    // limpa o input
    inputTextoTarefa.value = '';
}


for (let i= 0; i <arrayList.length; i+=1){
    arrayList[i].addEventListener('click',selecionaTarefa);
}
function selecionaTarefa (event){
    for (let i= 0; i <arrayList.length; i+=1){
        // arrayList[i].classList.remove('selected');
        // event.target.classList.add('selected');
        event.target.style.backoundColor = "rgb(128,128,128)";
    }
}

// adicionar o eventListener em todos os itens do li adicionados
// listaOrdenada.addEventListener('click', seleciona);
// listaOrdenada.addEventListener('dblclick', concluida);

// function seleciona(event){
//     for (let i= 0; i <arrayList.length; i+=1) {
//         let itensNoArray = arrayList[i];
//         itensNoArray.style.backoundColor= "white";
//     }  
//     event.target.style.backoundColor = "rgb(128,128,128)";
// }
// function concluida(event){
//   if (event.target.classList.contains('completed')){
//       event.target.classList.remove('completed');
//   }else{
//       event.target.classList.add('completed');
//   }
// }
// // remove filhos 

// let buttonApagaTudo = document.querySelector('#apaga-tudo');

// buttonApagaTudo.addEventListener('click', deleteAll)

// // function deleteAll(){
// //     listaOrdenada.innerHTML = ''
// // }
