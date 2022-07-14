// DOM selection

const inputForm = document.querySelector('.input-form');
const input = document.querySelector('#input');
const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  const inputValue = input.value;

  const getTimestamp = function () {
    const date = new Date();
    let timestamp = `Registered: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(timestamp);
    return timestamp;
  };
  getTimestamp();

  if (inputValue.trim().length === 0) {
    input.classList.add('placeholder-alert');
    input.classList.add('border-alert');
    input.placeholder = 'Please Enter a valid task!';
  } else {
    const html = `
    <div class="wrapper">
      <div class="task-container">
        <h2 class="task">${input.value}</h2>
            <button class="btn btn-delete">Delete</button>
        </div>
        <p class="timestamp">${getTimestamp()}</p>
    </div>`;
    // const html = `<div class="task-container">
    // <h2 class="task">${input.value}</h2>
    // <button class="btn btn-delete">Delete</button>
    // </div>`;

    inputForm.insertAdjacentHTML('afterend', html);

    const btnDelete = document.querySelector('.btn-delete');
    btnDelete.addEventListener('click', e => {
      // const element = e.target.parentNode.parentNode.parentNode;
      const element = e.target.closest('.wrapper');
      element.remove();
    });

    const taskContainer = document.querySelector('.task-container');
    taskContainer.addEventListener('click', e => {
      taskContainer.classList.toggle('toggle');
    });

    input.classList.remove('placeholder-alert');
    input.classList.remove('border-alert');
    input.placeholder = 'Enter another task';
    input.value = '';
  }
});
