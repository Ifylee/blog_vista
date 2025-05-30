# Blog_vista
Blog_vista is a dynamic platform for developers to share insights, publish posts, and engage in meaningful discussions.

## Description
This is a CMS-style blog site where developers can publish posts and comment on others'. Built from scratch, it follows the MVC pattern, using Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication. The app is deployed on Render. The app is deployed on Render for easy access.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#)
- [Features](#)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)



## Installation
Clone the repository: git clone https: https://github.com/Ifylee/blog_vista

**Install Dependencies:**
To install dependencies:

```
Run npm install

```
**Evironment variables:**
Set up the environment variables by creating a .env file in the root directory and include the following:
- DB_NAME='your_database_name'
- DB_USER='your_database_user'
- DB_PASSWORD='your_database_password'
- SESSION_SECRET='your_secret_key'

**To run the application:**
Run npm start

## Usage
Once the app is running, you can:

- Create a user account.
- Log in and create, edit, or delete your blog posts.
- Comment on other developers' blog posts.
- Log out when finished.

**Deployed Link:**
Check out the live application on Render here:
https://blog-vista-q2wd.onrender.com

## Technologies
- Node.js: JavaScript runtime
- Express.js: Web framework for Node.js
- Sequelize: ORM for database interactions
- Postgres: Relational database management system
- Handlebars.js: Templating engine for rendering views
- express-session: Middleware for managing user sessions
- bcrypt: For password hashing and security

## Features
- User authentication using express-session.
- MVC architecture to maintain separation of concerns.
- User can create, read, update, and delete (CRUD) blog posts.
- Comment functionality on blog posts.
- Fully responsive design.
- Secure authentication and session management.

## Testing
To make sure Blog_vista works properly and is reliable, I wrote a set of automated tests using Jest and Supertest. These tests focus on important user actions like signing up, logging in, and logging out.

- Registration: I test what happens when someone     tries to register without providing the necessary details.

- Login: I check that the app handles missing login credentials correctly.

- Logout: I test both when a logged-in user logs out and when someone tries to log out without being logged in.

- Session handling: I mock different session states to simulate users who are logged in or logged out, making sure protected routes behave as expected.

These tests help me catch problems early and keep everything running smoothly as the app grows.

**To Run Test:**
```
npm install
npm test
```
**Example test for logout route when user is logged in**
it('should return 204 on logout when user is logged in', async () => {
  const loggedInApp = express();
  loggedInApp.use(express.json());
  loggedInApp.use((req, res, next) => {
    req.session = {
      logged_in: true,
      destroy: (callback) => callback(null),
    };
    next();
  });
  loggedInApp.use('/api/users', userRoutes);

  const res = await request(loggedInApp).post('/api/users/logout');
  expect(res.statusCode).toBe(204);
});

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome!

## Questions

  For more questions, please open an issue on my github: [ifylee](https://github.com/Ifylee/blog_vista)

  You can also contact me directly at: [ifyekezie@yahoo.co.uk](mailto:ifyekezie@yahoo.co.uk)

This README provides a clear description, setup instructions, and highlights the key technologies and features of the project. Let me know if you'd like any changes!

**Screenshots of my application**
![alt text](image-2.png)
![alt text](image.png)



