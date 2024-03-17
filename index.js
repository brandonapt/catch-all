const express = require('express');
const app = express();

// make a wildcard route
app.get('*', (req, res) => {
    // print the EXACT request URL
    console.log(req.url);
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});