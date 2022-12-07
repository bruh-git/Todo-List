const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const arrayList = document.querySelectorAll('li');

function add() {
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
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
function seleciona(event) {
  const liList = event.target;
  const classSelected = document.querySelector('.selected');
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
  liList.classList.add('selected');
}
function concluida(event) {
  const liList = event.target;
  liList.classList.toggle('completed');
}
// remove tudo

const buttonApagaTudo = document.querySelector('#apaga-tudo');

buttonApagaTudo.addEventListener('click', deleteAll);

function deleteAll() {
  listaOrdenada.innerHTML = '';
}
// remove finalizados
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes

const buttomRemoverFinalizados = document.querySelector('#remover-finalizados');

buttomRemoverFinalizados.addEventListener('click', () => {
  const allItems = listaOrdenada.childNodes;
  // explicação desse for no grupo de whatsapp das mulheres da turma 19
  // assim começa removendo do ultimo elemento ate chegar no primeiro, para não correr o risco de serem renumerados
  for (let i = allItems.length - 1; i >= 0; i -= 1) {
    if (allItems[i].classList.contains('completed')) {
      listaOrdenada.removeChild(allItems[i]);
    }
  }
});

const buttomRemoverSelecionados = document.querySelector('#remover-selecionado');

buttomRemoverSelecionados.addEventListener('click', () => {
  const items = listaOrdenada.childNodes;
  for (let i = items.length - 1; i >= 0; i -= 1) {
    if (items[i].classList.contains('selected')) {
      listaOrdenada.removeChild(items[i]);
    }
  }
});
