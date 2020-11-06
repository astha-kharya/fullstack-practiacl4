var todos = document.querySelector(".todos");
var addButton = document.querySelector(".add-button");
addButton.addEventListener("click", createToDo);
var input = document.getElementById("input");

function createToDo(e) {
    e.preventDefault();
    if (input.value) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");
        var li = document.createElement("li");
        li.innerHTML = input.value;
        var checkButton = document.createElement("button");
        checkButton.classList.add("check-button");
        checkButton.addEventListener('click', function() {
            li.classList.toggle('check');
        })
        checkButton.innerHTML = '<i class="fa fa-check"></i>';
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener('click', function() {
            todos.removeChild(newDiv);
        })
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(li);
        newDiv.appendChild(checkButton);
        newDiv.appendChild(deleteButton);
        todos.appendChild(newDiv);
        input.value = "";
    } else {
        alert('Enter value first')
    }
};