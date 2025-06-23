const mod = require('hello-mod');
const express = require('express');
const es6Renderer = require('express-es6-template-engine')
const handlebars = require('express-handlebars')
const port = 3000;
const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: "hbs"
}))
app.use(express.static('public'))

global.hello_message = "Hello World!"
global.image_url     = ""

app.get('/', mod.manageIndexRoute)

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
