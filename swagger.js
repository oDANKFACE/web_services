const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Project 1',
        description: 'My first project',
    },
    host: 'project-1-mlda.onrender.com',
    // host: 'localhost:3000',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
