
### Project Overview

**Objective:**
Create a single-page application with a Node.js backend and a frontend using Angular. The application allows users to create records for tasks with specific details.

### Steps to Set Up the Project

1. **Configuration in `.env` file:**
   - Inside the `server` folder, create a `.env` file.
   - Configure the following variables:
     - `mongo_connection`: MongoDB connection string.
     - `PORT`: Port for the Node.js server.
     - `FE_Connection`: Connection details for the frontend.

2. **Server Setup:**
   - In the `server` folder, run `npm install` for package installation.

3. **Client Setup:**
   - In the `client` folder, run `npm install` for package installation.

4. **Start Frontend:**
   - In the `client` folder, run `npm start` to start the frontend.

5. **Start Backend:**
   - In the `server` folder, run `node index.js` to start the backend.


- **Editing and Completion:**
  - Users can edit task details except for estimated hours and estimate notes.
  - Adding additional entries for estimates is allowed.
  - An action button "Complete Task" is available.
  - Upon completion, users must provide total hours and final notes in a popup.
  - Once completed, a task record becomes immutable.

### Error Handling

- **Duplicate Task Numbers:**
  - If a user tries to create a task with an existing task number, an error is thrown to prevent duplicates.

## API Documentation

Explore our API using [Postman](https://documenter.getpostman.com/view/20807936/2s9Ye8eubW).



