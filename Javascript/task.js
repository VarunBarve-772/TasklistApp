let taskInput = document.querySelector('#taskInput'),
     addTaskBtn = document.querySelector('#addTask'),
     displaytasks = document.querySelector('#displayTasks'),
     form = document.querySelector('#tasks');

 // Event listener for add task
addTaskBtn.addEventListener('click', function() {
    //Getting name of the task 
    let taskInputvalue = taskInput.value;
    if(taskInputvalue !== '') {
        // Create li element
        let li = document.createElement('li');
        // Add classes to li
        li.className = 'w3-display-container';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInputvalue));        
        // Create new span element
        let span = document.createElement('span');
        // Add id to span 
        span.id = 'removeIcon';
        // Add classes to span
        span.className = 'w3-button w3-transparent w3-display-right';
        // Create text node and append to li
        span.appendChild(document.createTextNode('X'));
        // Append span to li
        li.appendChild(span);

        // Append li to ul
        displaytasks.appendChild(li);
        
        // Clear input fields
        taskInput.value = '';
    } 
});

// Event listener for X button
displaytasks.addEventListener('click', function(e) {
    if(e.target.id === 'removeIcon') {
        if(confirm('Are you sure you want to delete this Task....?')) {
            e.target.parentElement.remove();
        }
    }
});

// Prevent default behaviour of form element
tasks.addEventListener('submit', function(e) {
    e.preventDefault();
});