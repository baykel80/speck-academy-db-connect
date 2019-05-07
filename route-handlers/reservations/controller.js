const db=require('../../db/connect');
const getReservations =(req,res,next) => {
    db.query('SELECT * FROM reservations',(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

const getReservationsById =(req,res,next) => {
    const reservationsId=req.params.reservationsId;
    db.query('SELECT * FROM reservations where reservation_uid =$1',[reservationsId],(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

module.exports={
    getReservations,
    getReservationsById,
};