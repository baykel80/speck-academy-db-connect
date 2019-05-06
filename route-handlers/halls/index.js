const express=require('express');
const hallsController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(hallsController.getHalls);
router.route('/:hallId').get(hallsController.getHallsById);
router.route('/halls/create'). post(hallsController.createNewHall);


module.exports=router;