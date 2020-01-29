let input = document.getElementById("todoInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

function addTodo() {
  let inputValue = input.value;
  if (inputValue !== "") {
    let list = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("onclick", "completeTodo(this)");
    checkbox.type = "checkbox";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "" + inputValue;
    let button = document.createElement("button");
    button.setAttribute("onclick", "deliteTodo(this)");
    button.innerHTML = "X";
    document.getElementById("todoList");

    list.appendChild(checkbox);
    list.appendChild(paragraph);
    list.appendChild(button);

    document.getElementById("todoList").appendChild(list);
    input.value = "";
  }
}
function completeTodo(e) {
  e.parentElement.children[1].classList.toggle("completed");
}

function deliteTodo(e) {
  var r = confirm("Are you sure you want to delete your todo?");
  if (r === true) {
    e.parentElement.remove();
  } else {
  }
}
