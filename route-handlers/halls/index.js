const express=require('express');
const hallsController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(hallsController.getHalls);
router.route('/halls/:hallId').get(hallsController.getHallsById);
router.route('/halls/create'). post(hallsController.createNewHall);
router.route('/halls/:hallId/update'). put(hallsController.hallUpdate);
router.route('/halls/:hallId/delete'). delete(hallsController.hallDelete);
module.exports=router;