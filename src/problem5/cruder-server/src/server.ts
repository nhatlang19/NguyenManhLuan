import express from 'express';
import resourceRoutes from './routes/resource';
import bodyParser from 'body-parser';
import { initDatabase } from './database';
import swaggerSetup from './swagger';

const app = express();

app.use(bodyParser.json());
app.use(express.json());

swaggerSetup(app);

app.use('/api/resources', resourceRoutes);

const PORT = 3000;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
