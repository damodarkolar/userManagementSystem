# User Management System API

Welcome to the User Management System API! This API provides endpoints for user authentication, profile management, and administrative functions.

## Base URLs

- Local Development: `http://localhost:8080/`
- Deployment: `https://usermanagementsystem-rz74.onrender.com/`

## Authentication

### Register a New User

Endpoint: `POST /auth/register`

Registers a new user with the system.

### Login User

Endpoint: `POST /auth/login`

Login a registred user.

### Log Out User

Endpoint: `POST /auth/login`

Logout logged user .


...

## Profile Management

### Get User Profile

Endpoint: `GET /profile/{userId}`

Retrieves the profile details of a specific user.

### Get All Public users Profile

Endpoint: `GET /{userId}/getAllPublicProfiles`

Retrieves the profile details of public Users.

### Update the user Profile

Endpoint: `PUT /{userId}/update`

To update the login users.

### Toggle privacy user Profile

Endpoint: `PUT /{userId}/privacy`

To toggle the public access .

...

## Administrative Functions

### Get All Users (Admin Only)

Endpoint: `GET /admin/users`

Retrieves the profiles of all users.

### Get Single User (Admin Only)

Endpoint: `GET /admin/{userId}/profile`

Retrieves the profiles single users.

...

## Swagger Documentation

Explore the API endpoints using the interactive Swagger documentation:

- Local Development: [`http://localhost:8080/api-docs`](http://localhost:8080/api-docs)
- Deployment: [`https://usermanagementsystem-rz74.onrender.com/api-docs`](https://usermanagementsystem-rz74.onrender.com/api-docs)

---

Feel free to explore the API endpoints using your preferred API client, such as Postman or Swagger UI. Don't forget to include the authentication token in the header for endpoints that require authentication.

For more details on each endpoint, including request and response formats, refer to the Swagger documentation provided above.

If you encounter any issues or have questions, please don't hesitate to reach out to our support team.

Happy coding!
