process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');
const express = require('express');

const app = express();
const port = config.get('server.port');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', require('./routers').todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
