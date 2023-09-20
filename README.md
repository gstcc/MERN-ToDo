 This is a simple study schedule web application built using MERN stack. It allows you to manage your tasks, mark them as completed, edit them, and delete them. The backend is built using Node.js and Express.js and communicates with a MongoDB database to store task data.

Features
View and manage both uncompleted and completed tasks.
Mark tasks as completed.
Edit existing tasks.
Delete tasks.
Add new tasks to your schedule.

Technologies Used
React
Tailwindcss
Axios (for making API requests)
Node.js
Express.js

Backend:
Installation
To set up the backend server, follow these steps:

Clone this repository or download the backend source code.

Navigate to the project directory.

Create a .env file in the project root and add the following configuration:

dotenv
Copy code
mongoDBURL=<your-mongodb-url>
Replace <your-mongodb-url> with the URL of your MongoDB database.

Install the required dependencies by running the following command:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
npm start
The server will start and listen on port 5555 by default.

API Endpoints
The following API endpoints are available:

GET /task: Fetches a list of all tasks.
GET /task/:id: Fetches a single task by its ID.
POST /task: Creates a new task.
PUT /task/:id: Updates an existing task by its ID.
DELETE /task/:id: Deletes a task by its ID.

Usage
After starting the backend server, you can make HTTP requests to the provided API endpoints to manage tasks.

Use the GET /task endpoint to retrieve a list of all tasks.

Use the POST /task endpoint to create a new task. Send a JSON object in the request body with the task details.

Use the PUT /task/:id endpoint to update an existing task. Provide the task ID in the URL and send a JSON object with the updated task details in the request body.

Use the DELETE /task/:id endpoint to delete a task by its ID.

Middleware
The backend uses middleware for handling CORS (Cross-Origin Resource Sharing) and parsing JSON request bodies.

Database
The backend connects to a MongoDB database specified in the .env file. Make sure to configure the mongoDBURL environment variable with your MongoDB database connection URL.

Author:
https://github.com/gstcc