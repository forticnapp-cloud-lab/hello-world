const mod = require('hello-mod');
const express = require('express');
const port = 3000;
const app = express();

mod.init(app, __dirname);
app.get('/', mod.manageIndexRoute)
app.use(express.static('public'))

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
