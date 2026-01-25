const input = document.querySelector(".input"),
  add = document.querySelector(".add"),
  divTasks = document.querySelector(".tasks");

let tasks = [];

if(localStorage.getItem('tasks')) tasks = JSON.parse(localStorage.getItem('tasks'));

getLS();

divTasks.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')) {
    removeTask(e.target.parentElement.getAttribute('id'));
    e.target.parentElement.remove();
  }
  if(e.target.classList.contains('task')) {
    toggleStatus(e.target.getAttribute('id'));
    e.target.classList.toggle('done');
  }
})

add.onclick = (e) => {
e.preventDefault();
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  }
};

function addTask(inputTxt) {
  const task = {
    id: crypto.randomUUID(),
    text: inputTxt,
    completed: false,
  };
  tasks.push(task);
  makeEle(tasks);
  setLS(tasks);
};

function makeEle(tasks) {
  divTasks.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    if (task.completed) div.className = "task done";
    div.setAttribute("id", task.id);
    div.appendChild(document.createTextNode(task.text));
    const span = document.createElement("span");
    span.className = 'delete';
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    divTasks.appendChild(div);
  });
};

function setLS() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function getLS() {
  const data = localStorage.getItem("tasks");
  if (data) {
    const tasks = JSON.parse(data);
    makeEle(tasks);
  }
};

function removeTask(id) {
  tasks = tasks.filter((task) => task.id != id );
  setLS(tasks);
}

function toggleStatus(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks[i].completed = !tasks[i].completed;
      break;
    }
  }
  setLS(tasks);
}