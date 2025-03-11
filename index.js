const mod = require('hello-mod');
const express = require('express');
const es6Renderer = require('express-es6-template-engine')
const port = 3000;
const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

mod.init(app, __dirname);
app.get('/', mod.manageIndexRoute)
app.use(express.static('public'))

global.hello_message = "Hello World!"

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});