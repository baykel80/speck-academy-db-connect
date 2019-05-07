const express=require('express');
const reservationsController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(reservationsController.getReservations);
router.route('/reservations/:reservationsId').get(reservationsController.getReservationsById);

module.exports=router;   