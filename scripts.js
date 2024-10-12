// Obtendo os elementos do formulário
const addButton = document.getElementById('add-button');
const itemInput = document.getElementById('item-input');
const shoppingList = document.getElementById('shopping-list');
const clearButton = document.getElementById('clear-all');
const itemCount = document.getElementById('item-count');

// Adicionando um evento de clique ao botão de excluir dos elementos filhos.
const existingItems = shoppingList.children;
for (let i = 0; i < existingItems.length; i++) {
  const existingItem = existingItems[i];
  const deleteButton = existingItem.querySelector('.delete-btn');
  if (deleteButton) {
    deleteButton.onclick = function() {
      shoppingList.removeChild(existingItem);
      updateItemCount();
    };
  }
}

// Adicionando um evento de clique ao botão de adicionar.
addButton.onclick = function() {
  const item = itemInput.value.trim();
  if (item !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    // Criando o botão de excluir.
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.onclick = function() {
      shoppingList.removeChild(listItem);
      updateItemCount();
    };
    listItem.appendChild(deleteButton);

    // Adiciona o novo item à lista de compras.
    shoppingList.appendChild(listItem);

    // Limpa o campo de entrada de itens.
    itemInput.value = '';

    // Atualiza o contador de itens após o novo item ser adicionado.
    updateItemCount();
  }
}

// Adicionando um evento de clique ao botão de limpar a lista.
clearButton.onclick = function() {
  // Limpa a lista de compras.
  shoppingList.innerHTML = '';
  updateItemCount();
};

// Função para atualizar o contador de itens.
function updateItemCount() {
  const items = shoppingList.children;
  itemCount.textContent = items.length;
}