const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Swagger Server Start and running on port ${PORT}`);
});
