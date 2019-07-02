const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/', (req, res) => res.send('this is working'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
