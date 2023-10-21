const inputContent = document.querySelector('.input-container');
const btnSave = document.querySelector('.button-container');
const tasksContent = document.querySelector('.tasks')



btnSave.addEventListener('click', addTask);

function addTask(event) {
    const inputValue = inputContent.value;

    event.preventDefault();
    if(inputValue === '') {
        alert('Preencha uma tarefa por favor!')
    } else{
   
   
    const newContent = document.createElement('li');
    newContent.textContent = inputValue;

    tasksContent.appendChild(newContent)
    console.log(inputValue);
}
}

