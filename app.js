import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 80;

app.engine('hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
