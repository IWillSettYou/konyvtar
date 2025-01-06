const express = require('express');
const bodyParser = require('body-parser');
const prisma = require('./prismaClient');

const app = express();

app.use(bodyParser.json());

const readerRoutes = require('./routes/readerRoutes');
app.use('/readers', readerRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
