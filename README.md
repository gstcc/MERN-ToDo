# Study Schedule Web Application

This is a simple study schedule web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows you to efficiently manage your study tasks, mark them as completed, edit them, and delete them.

## Features

- View and manage both uncompleted and completed tasks.
- Mark tasks as completed.
- Edit existing tasks.
- Delete tasks.
- Add new tasks to your schedule.

## Technologies Used

- React
- Tailwind CSS
- Axios (for making API requests)
- Node.js
- Express.js
- MongoDB (database)

## Backend Installation

To set up the backend server, follow these steps:

1. Clone this repository or download the backend source code.

2. Navigate to the project directory.

3. Create a `.env` file in the project root and add the following configuration:

Replace `<your-mongodb-url>` with the URL of your MongoDB database in the `.env` file:

Install the required dependencies by running the following command:
npm i dependency

4. Start the backend server:
npm run dev
The server will start and listen on port 5555 by default.

 ## API Endpoints
The following API endpoints are available:

- GET /task: Fetches a list of all tasks.
- GET /task/:id: Fetches a single task by its ID.
- POST /task: Creates a new task.
- PUT /task/:id: Updates an existing task by its ID.
- DELETE /task/:id: Deletes a task by its ID.

## Usage
After starting the backend server, you can make HTTP requests to the provided API endpoints to manage tasks.

Use the GET /task endpoint to retrieve a list of all tasks.

Use the POST /task endpoint to create a new task. Send a JSON object in the request body with the task details.

Use the PUT /task/:id endpoint to update an existing task. Provide the task ID in the URL and send a JSON object with the updated task details in the request body.

Use the DELETE /task/:id endpoint to delete a task by its ID.

## Middleware
The backend uses middleware for handling CORS (Cross-Origin Resource Sharing) and parsing JSON request bodies.

## Database
The backend connects to a MongoDB database specified in the .env file. Make sure to configure the mongoDBURL environment variable with your MongoDB database connection URL.

## Frontend Installation
# Navigate to the project directory:
- cd study-schedule-app
# Install the project dependencies:
- npm i dependencies
# Start the development server:
- npm start

## Usage
Upon running the application, you will see a list of uncompleted tasks on the home page.

To complete a task, click the circle icon next to the task. This will move the task to the "Completed tasks" section.

To edit a task, click the information icon (i) next to the task. This will open a menu with options to edit or delete the task.

To add a new task, scroll to the bottom of the task list and fill in the task details in the input fields provided. Then, click the "Add Task" button.

Author:
https://github.com/gstcc