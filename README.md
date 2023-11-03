# MERN Stack CRUD Application

This is a CRUD (Create, Read, Update, Delete) application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application includes features for user authentication, task management, and the ability to mark tasks as completed.

## Features
  
- **User Authentication**:
  - **Login Page**: Users can log in using their email and password.
  - **Register Page**: New users can create an account by providing their email,password,name and phone
  - **Demo Credentials**: If you don't want to register, you can use these credentials to login:
    - Email: `admin@gmail.com `
    - Password:` admin@12345 ` 
    
 *for running locally:*
 Use the following commands:
 
 - Frontend: `npm start`
 - Backend: `npm start`

 **Frontend Port**: <span style="background-color: #007acc; color: white; padding: 0.2rem 0.5rem;">localhost:3000</span>
 
 **Backend Port**: <span style="background-color: #007acc; color: white; padding: 0.2rem 0.5rem;">localhost:4004</span>

- **Task Management**:
  - **Task List**: View a list of tasks with options to mark tasks as completed.
  - **Add Task**: Users can add new tasks with a task name and description.
  - **Update Task**: Users can edit existing tasks, including changing the task name and description.
  - **Delete Task**: Users can delete tasks from the task list.

- **Task Completion**:
  - Users can mark tasks as completed, changing the task's status.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or a connection to a MongoDB database
