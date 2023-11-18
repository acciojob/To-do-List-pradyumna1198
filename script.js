//your code here
document.addEventListener('DOMContentLoaded', function () {
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  addTodoBtn.addEventListener('click', function () {
    const todoText = newTodoInput.value.trim(); // Trim removes leading and trailing whitespaces

    if (todoText !== '') {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = todoText;
      todoList.appendChild(newTodoItem);

      // Clear input after adding todo
      newTodoInput.value = '';
    } else {
      alert('Please enter a non-empty todo item.');
    }
  });
});
