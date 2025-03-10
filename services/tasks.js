let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function openPopup() {
            document.getElementById("taskPopup").style.display = "block";
        }

        function closePopup() {
            document.getElementById("taskPopup").style.display = "none";
        }

        function saveTask() {
            let name = document.getElementById("taskName").value;
            let desc = document.getElementById("taskDesc").value;
            let time = document.getElementById("taskTime").value;
            let priority = document.getElementById("taskPriority").value;
            
            if (!name) {
                alert("Task Name is required!");
                return;
            }

            tasks.push({ name, desc, time, priority });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            closePopup();
            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }

        function editTask(index) {
            let task = tasks[index];
            document.getElementById("taskName").value = task.name;
            document.getElementById("taskDesc").value = task.desc;
            document.getElementById("taskTime").value = task.time;
            document.getElementById("taskPriority").value = task.priority;

            deleteTask(index);
            openPopup();
        }

        function renderTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                let taskElement = document.createElement("div");
                taskElement.classList.add("task");

                let priorityClass = task.priority === "high" ? "high" : task.priority === "medium" ? "medium" : "low";

                taskElement.innerHTML = `
                    <div class="priority ${priorityClass}">${task.priority.toUpperCase()}</div>
                    <div><strong>${task.name}</strong></div>
                    <div>${task.desc ? task.desc : ""}</div>
                    <div>${task.time ? "Time: " + task.time : ""}</div>
                    <div class="task-buttons">
                        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                    </div>
                `;

                taskList.appendChild(taskElement);
            });
        }

        renderTasks();