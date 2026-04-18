const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/frontend/browser'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/browser/index.html'));
});

// Start the app by listening on the default port
app.listen(port, () => {
    console.log(`Frontend server is running on port ${port}`);
});
