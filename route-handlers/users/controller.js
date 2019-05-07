const db=require('../../db/connect');

const getUsers =(req,res,next) => {
    db.query('SELECT * FROM users',(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

const getUsersById =(req,res,next) => {
    const usersId=req.params.usersId;
    db.query('SELECT * FROM users where user_uid =$1',[usersId],(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

module.exports={
    getUsers,
    getUsersById,
   // createNewReservation,
    //reservationUpdate,
    //reservationDelete,
};