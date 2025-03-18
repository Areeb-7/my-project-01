# Urban Company MERN Stack Project

This is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) for the backend and Firebase for authentication.

## Features

- User authentication (Firebase Authentication)
- Database storage (MongoDB with Mongoose)
- API backend (Express.js and Node.js)

## Installation

Follow the steps below to set up the project on your local machine.

### Prerequisites

- Node.js installed ([Download Node.js](https://nodejs.org/))
- Git installed ([Download Git](https://git-scm.com/))
- MongoDB installed and running ([Download MongoDB](https://www.mongodb.com/))

### Steps to Install

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/Areeb-7/my-project-01.git
   ```

2. **Navigate to Project Directory:**

   ```sh
   cd my-project-01
   ```

3. **Install Dependencies:**

   ```sh
   npm install
   ```

4. **Set Up MongoDB:**

   - Ensure MongoDB is running locally or use a cloud service like MongoDB Atlas.
   - Update the connection string in the backend configuration.

5. **Start the Backend Server:**

   ```sh
   cd backend
   node server.js
   ```

6. **Start the Frontend Server:**

   ```sh
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000/`.

## Firebase Setup

Follow these steps to integrate Firebase into the project.

1. **Create a Firebase Project:**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click on "Add project" and follow the setup process

2. **Add a Web App:**

   - Click on "Add app" and select "Web"
   - Register the app and copy the Firebase configuration object

3. **Setup Firebase in the Project:**

   - Create a file named `firebaseConfig.js` in the `src` folder
   - Add the following code and replace the placeholders with your Firebase config:

   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   ```

4. **Enable Authentication:**

   - Go to Firebase Console → Authentication → Sign-in method
   - Enable the desired authentication providers (Email/Password, Google, etc.)

##

