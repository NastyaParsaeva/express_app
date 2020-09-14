const express = require("express");
const routes = require('./routes.js');

const app = express();
app.use('/', routes);
const port = process.env.PORT || "8000";

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});