const express = require('express');
const app = express();

app.get('/', (request, response) => response.send('Hello World'));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});