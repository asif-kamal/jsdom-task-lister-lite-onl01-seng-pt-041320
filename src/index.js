document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // const tasks = document.getElementById('tasks');
  const form = document.getElementById('create-task-form');
  
  form.addEventListener('submit', function(event) {
    const tasks = document.getElementById('tasks');
    let li = document.createElement('li')
    let data = document.getElementById('new-task-description').value
    let node = document.createTextNode(data)
    li.appendChild(node)
    tasks.appendChild(li)
    event.preventDefault();
  });
});
