const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const sequelize = require('./config/database');

sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error('Unable to sync database:', err);
    });

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/public')));