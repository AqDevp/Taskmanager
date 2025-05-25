# React Dashboard

A responsive task management dashboard built using React. This project allows users to manage their profile and tasks, and view task statistics in a clean and responsive layout.

![image](https://github.com/user-attachments/assets/c9aee54c-1e63-472f-a69d-2d919c1d2d32)


![image](https://github.com/user-attachments/assets/97fbad77-d605-48dd-8f25-e5596f1e91e9)


![image](https://github.com/user-attachments/assets/f3aef576-65d8-4d4b-9e37-7207a2d02ae0)







---

## 🚀 Features

* User profile management (name, email, avatar)
* Add, complete, and clear tasks
* Task statistics summary
* Responsive design for mobile and desktop views
* Vector icons for enhanced UI

---

## 📚 Libraries and Frameworks Used

* **React**: JavaScript library for building the user interface with reusable components and reactive state management.
* **React Icons (`react-icons`)**: Provides a wide set of customizable vector icons.
* **CSS (Custom Styles)**: Plain CSS is used for styling, with mobile-first responsive design.

---

## 🧩 Key Components and Functionality

### 📋 Dashboard Component

* **Profile Section**:

  * Displays avatar, name, and email
  * Editable form for updating profile details

* **Tasks Section**:

  * Input to add new tasks
  * Task list with checkboxes
  * "Clear Completed" button

* **Statistics Section**:

  * Shows stats such as total and completed tasks

* **State Management**:
  Uses `useState` for managing:

  * User data
  * Tasks list
  * Task completion status

### 💅 Responsive CSS

* Layout, typography, and color styling using plain CSS
* Mobile-first design using media queries
* Responsive features:

  * Stacked layout on mobile
  * Full-width inputs and buttons on smaller screens
  * Adjusted spacing and alignment for better readability

---

## 📁 Folder Structure

```
/src
├── App.js              # Main application component
├── dashboard.js        # Core dashboard component with JSX and logic
├── App.css             # Styling with responsive media queries
└── package.json        # Lists project dependencies (react, react-dom, react-icons)
```

---

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

   ```bash
   cd react-dashboard
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm start
   ```


