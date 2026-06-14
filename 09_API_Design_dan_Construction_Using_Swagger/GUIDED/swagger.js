import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'film API',
      version: '1.0.0',
      description: 'Dokumentasi API film',
    },
  },
  apis: ['./app.js'], // pastikan path benar
};

const specs = swaggerJsdoc(options);

// ✅ export di akhir (ESM)
export { specs, swaggerUi };