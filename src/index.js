document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const input = document.querySelector('input#new-task-description');
    const taskDescription = input.value;

    if (taskDescription) {
      const li = document.createElement('li');
      li.textContent = taskDescription;

      const ul = document.querySelector('#tasks');
      ul.appendChild(li);

      input.value = ''; // Clear the input field after adding the task
    }
  });
});
