const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Project 1',
        description: 'My first project',
    },
    host: 'https://project-1-mlda.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
