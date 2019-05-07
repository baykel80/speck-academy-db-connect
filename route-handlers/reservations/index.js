const express=require('express');
const reservationsController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(reservationsController.getReservations);
router.route('/reservations/:reservationsId').get(reservationsController.getReservationsById);
router.route('/reservations/create'). post(reservationsController.createNewReservation);
router.route('/reservations/:reservationsId/update'). put(reservationsController.reservationUpdate);
router.route('/reservations/:reservationsId/delete'). delete(reservationsController.reservationDelete);

module.exports=router;   