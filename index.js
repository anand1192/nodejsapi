import express from 'express';
import bodyParser from 'body-Parser';

import users from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (reg, res) => res.send('Hello from Homepage,'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));