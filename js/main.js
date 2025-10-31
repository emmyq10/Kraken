// ====== Mobile Menu ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-menu a").forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    })
);

// ====== Theme Toggle ======
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

// Apply saved theme on load
document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

// Toggle theme when clicked
themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll back to top when button is clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Make the content vissible when click on the collapsible */
const coll = document.querySelectorAll(".collapsible");

coll.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");

        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Select elements
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Display tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
<div>
<strong>${task.title}</strong>
<p>${task.desc}</p>
</div>
<div class="task-buttons">
<button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
</div>
`;
        taskList.appendChild(li);
    });
    updateSummary();
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task
addBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if (title === '') return alert('Task title required');
    tasks.push({ title, desc, completed: false });
    titleInput.value = '';
    descInput.value = '';
    renderTasks();
});

// Toggle complete
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Edit task
function editTask(index) {
    const newTitle = prompt('Edit title', tasks[index].title);
    const newDesc = prompt('Edit description', tasks[index].desc);
    if (newTitle !== null) tasks[index].title = newTitle;
    if (newDesc !== null) tasks[index].desc = newDesc;
    renderTasks();
}

// Delete task
function deleteTask(index) {
    if (confirm('Delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Update summary
function updateSummary() {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(t => t.completed).length;
}

// Initial render
renderTasks();