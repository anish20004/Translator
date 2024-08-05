const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(__dirname));

// Route to serve the HomePage.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
