function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

     // create the delete button
     let deleteButton = document.createElement('button');

     // set the input's type to checkbox
     checkbox.type = "checkbox";

     // set the delete button's type to button
     deleteButton.type = "button"

       // set the title of the delete button
       deleteButton.textContent = "Delete"

       // set the title
       newLi.textContent = title;

       // attach the checkbox to the li
       newLi.appendChild(checkbox);

       // attach the delete button to the li
       newLi.appendChild(deleteButton);

       // attach the li to the ul
       toDoList.appendChild(newLi);

       //empty the input
       newToDoText.value = '';

       //delete button listener
       deleteButton.addEventListener('click', event => {
         event.preventDefault();
         console.log("blah");
         toDoList.removeChild(newLi);
      });
  });
}

window.onload = function() {
  onReady();
};
