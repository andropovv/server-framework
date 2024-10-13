const http = require('http');
const EventEmitter = require('events')
const Application = require('./framework/Application');
const router = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');
const bodyParser = require('./framework/parseBody');

const emitter = new EventEmitter()
const PORT = process.env.PORT || 8080;

const app = new Application();
app.use(jsonParser);
app.use(bodyParser);
app.use(urlParser('http://localhost:' + PORT));

app.addRouter(router)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})



