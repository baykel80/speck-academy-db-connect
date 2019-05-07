const express = require('express');
const bodyParser = require('body-parser');
const {
  hallsHandler,
  reservationsHandler,
}=require('./route-handlers')

const router = new express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// TODO: Base routes
router.use('/halls',hallsHandler);
router.use('/reservations',reservationsHandler);
// Test route
router.get('/', (req, res) => {
  res.send('ok');
});
router.get('/halls/:hallsId',hallsHandler);
router.post('/halls/create', hallsHandler);
router.put('/:hallID/update', hallsHandler);
router.delete('/:hallID/delete', hallsHandler);

router.get('/reservations/:reservationsId',reservationsHandler);
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));