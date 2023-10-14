// recupero gli elementi dal DOM
const addDomElement = document.getElementById('add');
const clearDomElement = document.getElementById('clear');
const inputDomElement = document.getElementById('task-input');
const tasksFieldDomElement = document.querySelector('.card__body');

// ascolto il click sull' add btn
addDomElement.addEventListener('click', function () {
  // recupero il valore interno all'input
  const inputValue = inputDomElement.value;
  
  if (inputValue === "") {
    inputDomElement.style.borderColor = "red";
  } else {
    inputDomElement.style.borderColor = "black";
    // creo l'elemento task
    const taskDomElement = document.createElement('div');
    taskDomElement.classList.add('task');
    const taskContentDomElement = `
      <input type="checkbox" class="check checked">
      <span class="task__text">${inputValue}</span>
    `
    taskDomElement.innerHTML += taskContentDomElement;
    tasksFieldDomElement.append(taskDomElement);
  }
})

// ascolto il click sul clear btn 
clearDomElement.addEventListener('click', function () {
  tasksFieldDomElement.innerHTML = "";
  inputDomElement.style.borderColor = "currentColor";
})

