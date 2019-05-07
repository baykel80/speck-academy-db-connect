const db=require('../../db/connect');
const getReservations =(req,res,next) => {
    db.query('SELECT * FROM reservations',(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

module.exports={
    getReservations,
};