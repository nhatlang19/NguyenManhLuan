import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import express from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Crude Server API',
      version: '1.0.0',
      description: 'This is the API documentation for Crude Server project',
    },
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);


export default (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
