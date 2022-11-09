// how do we select html elements in javascript

// if the html elment has an id we can use
// const element = document.getElementById(id)
// const elementTwo = document.querySelector("#id")

function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}
 
function addListenersToDeleteButtons() {
  // select all the buttons with .delete__btn class.
  //remember querySelectorAll return an array (NodeList)
  // only the last element in the array is new. every other element as been existing before;
  const buttonCollection = document.querySelectorAll(".delete__btn");
  // select the last element in the array;
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", deleteTodo);
}


function editTodo(eventObject) {
  const editButtonClicked = eventObject.target;
  const editTodoItem = editButtonClicked.parentNode.parentNode.parentNode;
  var editInput = editButtonClicked.querySelector("input[type=text");
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");

}



function addListenersToEditButtons() {
  const EditbuttonCollection = document.querySelectorAll(".edit_btn");
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", editTodo);
}


function showTodoOnTheScreen(todo) {
  const listOfTodo = document.querySelector("#todo__list");
  const li = document.createElement("li");
  li.classList.add("todo__section--todoItem");

  li.innerHTML = `<div class="Rethabile">
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>

  <div class="todo__actions--wrapper">
    <button id="edit_btn" class="todo__actions edit__btn">
      edit
    </button>

    <button id="delete_btn" class="todo__actions delete__btn">
      delete
    </button>

  </div>
</div>`;

  listOfTodo.appendChild(li);
  addListenersToDeleteButtons();
  addListenersToEditButtons();
}

function todoFormSumbitHandler(eventObject) {
  eventObject.preventDefault();
  const inputField = document.querySelector("#todo__input");
  const todoValue = inputField.value;
  showTodoOnTheScreen(todoValue);
  inputField.value = ""
}

function clearForm() {
const inputField = document.querySelector("#todo__input");
inputField.value = "";
}

const todoForm = document.getElementById("form");
todoForm.addEventListener("submit", todoFormSumbitHandler);

const clearButton = document.querySelector("#Clear");
clearButton.addEventListener("click", clearForm)

