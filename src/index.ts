import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './medium.json';

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`✅ medium-swagger server started at http://localhost:${port}`);
});
