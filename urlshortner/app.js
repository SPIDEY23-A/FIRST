const express = require('express');
const db = require('./config/db');
const urlRoutes = require('./routes/urlroute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', urlRoutes);

db.connect('mongodb://localhost:27017/urlshortner')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});