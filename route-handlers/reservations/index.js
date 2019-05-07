const express=require('express');
const reservationsController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(reservationsController.getReservations);


module.exports=router;   