🌐 Personal Portfolio Website with Task Dashboard

A responsive personal portfolio website built with HTML, CSS, and JavaScript, showcasing a developer’s profile, projects, contact section, and an integrated Task Dashboard with full CRUD functionality and local storage persistence.

🚀 Features

🧩 General
-Fully responsive layout for mobile, tablet, and desktop.
-Smooth navigation with scroll behavior and collapsible sections.
-Consistent color themes (dark/light mode).
-Animated “Back to Top” button for easy navigation.

💼 Projects Section
-Collapsible “Projects” area with expandable details.
-Adaptive width and consistent alignment with other sections.
-Fully responsive grid structure.

✅ Task Dashboard
A mini task management app integrated within the portfolio:
-Add new tasks (title + description).
-Edit or delete existing tasks.
-Mark tasks as complete/incomplete.
-Automatically save and load tasks using localStorage.
-Display total and completed task counts dynamically.

🧠 Tech Stack
Category	Technology
Frontend	HTML5, CSS3, JavaScript (ES6)
Styling	CSS Variables for easy theme management
Data Storage	Browser LocalStorage
Version Control	Git / GitHub

🧩 Folder Structure
📁 portfolio-project
├── 📄 index.html
├── 📁 css
│   └── style.css
├── 📁 js
│   └── main.js
├── 📁 images
│   └── (site assets)
└── 📄 README.md

⚙️ Setup Instructions

-Clone the Repository:
-git clone https://github.com/yourusername/portfolio-project.git
-Navigate into the folder:
-cd portfolio-project


Open the project:
Simply open index.html in your browser or use Live Server in VS Code.

To edit the Task Dashboard:
Modify logic in js/main.js.
Customize layout in css/style.css.

🌗 Theming & Customization
The website uses CSS variables to control:
-Colors
-Shadows
-Transitions
-Spacing
You can easily modify these in the :root section of style.css to match your preferred color palette or branding.

🧮 LocalStorage Data Structure
Each task is stored in the browser using:
{
  "title": "Example Task",
  "description": "This is a sample description",
  "completed": false
}


All tasks persist automatically even after page reload.

✨ Future Improvements
-Add category filters for tasks.
-Integrate animations for better UX.
-Include API-based project fetching from GitHub.
-Add user authentication for personal dashboards.

👨‍💻 Author
Emmanuel Tunde Omoyajowo
Frontend Developer | Web Enthusiast | Crypto Educator

📧 Email: emmatunde2001@gmail.com
🌍 Portfolio: [yourwebsite.com]
🐙 GitHub: [github.com/emmyq10]

🪪 License
This project is licensed under the MIT License — free for personal and commercial use with proper credit.
