function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function deleteToDo(newLi) {
    toDos.splice(newLi.id, 1);
    toDoList.removeChild(newLi);
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    let index = 0;

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";

      newLi.textContent = toDo.title;
      newLi.id = index;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.addEventListener('click', event => {
        deleteToDo(newLi);
      })
      index ++;
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
