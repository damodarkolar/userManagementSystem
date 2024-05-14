const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: "User Management System", 
      version: '1.0.0', 
      description: 'API for managing users and profiles', 
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:8080/", 
      },
    ],
    securityDefinitions: {
      BearerAuth: { 
        type: 'apiKey', 
        name: 'Authorization', 
        scheme: 'bearer', 
        in: 'header', 
      },
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
