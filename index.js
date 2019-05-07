const express = require('express');
const bodyParser = require('body-parser');
const {
  hallsHandler,
  reservationsHandler,
  usersHandler,
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
router.use('/users',usersHandler);
// Test route
router.get('/', (req, res) => {
  res.send('ok');
});
router.get('/halls/:hallsId',hallsHandler);
router.post('/halls/create', hallsHandler);
router.put('/halls/:hallId/update', hallsHandler);
router.delete('/halls/:hallID/delete', hallsHandler);

router.get('/reservations/:reservationsId',reservationsHandler);
router.post('/reservations/create', reservationsHandler);
router.put('/reservations/:reservationId/update', reservationsHandler);
router.delete('/reservations/:reservationId/delete', reservationsHandler);

router.get('/users/:usersId',usersHandler);
router.post('/users/create', usersHandler);



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));