# Foodiez

## Project Overview

**Foodiez** is a full-stack web application that allows users to analyze recipes for their ingredients and nutritional information. Users can either input a recipe directly or paste a link to a recipe, and the application will fetch the relevant data. Additionally, users can save their favorite recipes for easy access later.

The frontend is built using React, while the backend is powered by Flask and MongoDB. The application provides a seamless user experience with secure user authentication and personalized recipe management.

## Features

- **Recipe Analysis**: Users can input a recipe or paste a link to get detailed information about ingredients and nutritional values.
- **User Authentication**: Secure login and session management ensure that only authenticated users can save and view their recipes.
- **Recipe Saving**: Logged-in users can save their favorite recipes, which are stored in a MongoDB database.
- **Personalized Experience**: Users are greeted with their username upon logging in and can view their saved recipes in a user-friendly format.
- **Backend Integration**: The app uses Flask to handle API requests and MongoDB to store user data and recipes.
- **Responsive Design**: The application is designed to be accessible on various devices, ensuring a consistent user experience across platforms.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Flask, MongoDB
- **API Integration**: Fetch API for handling requests between the frontend and backend

## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/foodiez.git
    ```
2. **Install Frontend Dependencies**:
    ```bash
    cd foodiez
    npm install
    ```
3. **Install Backend Dependencies**:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
4. **Run the Application**:
    - **Frontend**: 
      ```bash
      npm start
      ```
    - **Backend**:
      ```bash
      flask run
      ```

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to the project.

## License

This project is licensed under the MIT License.

