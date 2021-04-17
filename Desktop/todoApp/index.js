const addForm = document.querySelector(".add");
let list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const item = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <span class="delete">×</span>
      </li>`;
  list.innerHTML += item
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const todo = addForm.add.value.trim();
  if(todo.length) {
    generateTemplate(todo)
    addForm.reset()
  }
  
});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})
