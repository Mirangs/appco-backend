const path = require('path');
const express = require('express');

const app = express();
require('./utils/initDb');
require('./model/db').healthCheck();

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/api/users', require('./routes/usersRouter'));
app.use('/api/statistics', require('./routes/statisticsRouter'));
app.use('*', (_, res) => res.sendFile('index.html'));

const { port } = require('./config');
app.listen(port, () => {
  console.log(`Server is running on ${port} port...`);
});
