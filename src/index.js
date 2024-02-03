document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = e.target["new-task-description"].value
    const dueDate = e.target["due-date"].value
    buildToDo(taskDescription, dueDate)
  })
});

function buildToDo(todo, dueDate){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let p =document.createElement('p')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} Due: ${dueDate}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}