
const express = require('express');
const request = require('supertest');
const userRoutes = require('../controllers/api/userRoutes');

const app = express();
app.use(express.json());

// Mock session middleware for testing (no user logged in)
app.use((req, res, next) => {
  req.session = {};  // fake session object without logged_in
  next();
});
app.use('/api/users', userRoutes);

describe('User Routes (QA Showcase)', () => {
  it('should return 400 if no user data is sent on registration', async () => {
    const res = await request(app).post('/api/users').send({});
    expect(res.statusCode).toBe(400);
  });

  it('should return 404 if user tries to logout without logging in', async () => {
    const res = await request(app).post('/api/users/logout');
    expect(res.statusCode).toBe(404);
  });

  it('should return 400 if no credentials sent on login', async () => {
    const res = await request(app).post('/api/users/login').send({});
    expect(res.statusCode).toBe(400);
  });

  it('should return 204 on logout when user is logged in', async () => {
    // Create a new app instance for this test with logged_in session and destroy mocked
    const loggedInApp = express();
    loggedInApp.use(express.json());
    loggedInApp.use((req, res, next) => {
      req.session = {
        logged_in: true,
        destroy: (callback) => callback(null), // mock destroy calls callback with no error
      };
      next();
    });
    loggedInApp.use('/api/users', userRoutes);

    const res = await request(loggedInApp).post('/api/users/logout');
    expect(res.statusCode).toBe(204); // expect 204 No Content
  });
});
