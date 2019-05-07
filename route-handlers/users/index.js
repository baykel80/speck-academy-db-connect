const express=require('express');
const usersController=require('./controller')

const router=new express.Router();

router.route('/')
    .get(usersController.getUsers);
router.route('/users/:usersId').get(usersController.getUsersById);
router.route('/users/create'). post(usersController.createNewUser);
router.route('/users/:usersId/update'). put(usersController.userUpdate);
//router.route('/reservations/:reservationsId/delete'). delete(usersController.reservationDelete);

module.exports=router;   