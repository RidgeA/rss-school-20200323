// $ DEBUG=express.* node index.js

const app = require('express')();
const port = 3000;

app.use((req, res) => res.end('Hello world!'));

app.listen(port);
