document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const tasks = document.getElementById('tasks');
  const form = document.getElementById('create-task-form');
  
  
  form.addEventListener('submit', function(event) {
    //const tasks = document.getElementById('tasks');
    let li = document.createElement('li');
    let data = document.getElementById('new-task-description').value
    let node = document.createTextNode(data)
    li.appendChild(node)
    tasks.appendChild(li)
    let btn = document.createElement("button")
    btn.innerHTML = "X"
    li.appendChild(btn)
    event.preventDefault();

    btn.addEventListener('click', function(event) {
      li.remove()
    
    });
  });


  // const btn = document.querySelector('button')

  // btn.addEventListener('click', function(event) {
  //   li.remove()
  
  // });

});
