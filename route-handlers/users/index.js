const express=require('express');
const usersController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(usersController.getUsers);
router.route('/users/:usersId').get(usersController.getUsersById);
//router.route('/reservations/create'). post(reservationsController.createNewReservation);
//router.route('/reservations/:reservationsId/update'). put(reservationsController.reservationUpdate);
//router.route('/reservations/:reservationsId/delete'). delete(reservationsController.reservationDelete);

module.exports=router;   