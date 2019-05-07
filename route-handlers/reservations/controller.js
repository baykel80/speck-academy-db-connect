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

const createNewReservation = (req,res,next) => {
    let query="INSERT INTO reservations (reservation_uid,reservation_status,reserved_from,reserverd_until,date_created,date_updated,hall_uid)  VALUES ('" + 
    req.body.reservation_uid + "','" + req.body.reservation_status + "','" +req.body.reserved_from + "','" 
    + req.body.reserverd_until + "','" + req.body.date_created + "','" + req.body.date_updated + "','" + req.body.hall_uid + "')";
    db.query(query,(err,result)=>{
    if (err) {
            return next(err);
        }
        res.send('Reservation created successfully');
    });
}

const reservationUpdate = (req,res,next) => {
    //console.log(req.body);
    const reservationId=req.params.reservationsId;
    let query="UPDATE reservations SET reservation_status='" + req.body.reservation_status + "', reserved_from='" 
    + req.body.reserved_from + "', reserverd_until='" + req.body.reserverd_until + "', date_created ='" + req.body.date_created 
    + "',date_updated='" + req.body.date_updated + "',hall_uid='" + req.body.hall_uid + "' WHERE reservation_uid=$1";
    db.query(query,[reservationId],(err,result)=>{
        if (err) {
                return next(err);
            }
            res.send('Reservation updated successfully');
        });
}

module.exports={
    getReservations,
    getReservationsById,
    createNewReservation,
    reservationUpdate,
};