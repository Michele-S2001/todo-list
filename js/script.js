// recupero gli elementi dal DOM
const addDomElement = document.getElementById('add');
const clearDomElement = document.getElementById('clear');
const inputDomElement = document.getElementById('task-input');
const tasksFieldDomElement = document.querySelector('.card__body');

// ascolto il click sull' add btn
addDomElement.addEventListener('click', function () {
  // recupero il valore interno all'input
  let inputValue = inputDomElement.value;

  if (inputValue === "") {
    inputDomElement.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
    inputDomElement.style.animation = "shaker 600ms linear";
  } else {
    inputDomElement.style.backgroundColor = "transparent";
    inputDomElement.style.animation = "";
    // creo l'elemento task
    const taskDomElement = document.createElement('div');
    taskDomElement.classList.add('task');
    const taskContentDomElement = `
      <input type="checkbox" class="check checked">
      <span class="task__text">${inputValue}</span>
    `
    taskDomElement.innerHTML += taskContentDomElement;
    tasksFieldDomElement.append(taskDomElement);

    inputDomElement.value = "";
  }
})

// ascolto il click sul clear btn 
clearDomElement.addEventListener('click', function () {
  tasksFieldDomElement.innerHTML = "";
  inputDomElement.style.borderColor = "currentColor";
})

