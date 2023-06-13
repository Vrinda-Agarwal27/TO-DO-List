
    function addTask() {
      var input = document.getElementById("new-task");
      var deadline = document.getElementById("new-deadline");
      var priority = document.getElementById("new-priority");
      var label = document.getElementById("new-label");
      var taskList = document.getElementById("task-list");

      if (input.value !== "") {
        var task = document.createElement("li");
        task.className = "task";
        task.innerHTML = `
          <input type="checkbox">
          <label>${input.value}</label>
          <span class="deadline">${formatDate(deadline.value)}</span>
          <span class="priority">${priority.value}</span>
          <span class="label">${label.value}</span>
          <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(task);
        input.value = "";
        deadline.value = "";
        priority.value = "medium";
        label.value = "";
      }
    }

    function removeTask(button) {
      var task = button.parentNode;
      var taskList = task.parentNode;
      taskList.removeChild(task);
    }

    function formatDate(dateString) {
      var options = { year: 'numeric', month: 'short', day: 'numeric' };
      var date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
    }
