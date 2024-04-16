document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = '';
        
        // Add event listener for delete button
        deleteBtn.addEventListener('click', function() {
            newTask.remove();
        });
    } else {
        alert('Please enter a task!');
    }
});
