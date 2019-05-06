const db=require('../../db/connect');
const getHalls =(req,res,next) => {
    db.query('SELECT * FROM halls',(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

const getHallsById =(req,res,next) => {
    const hallId=req.params.hallId;
    //console.log(req.params);
    db.query('SELECT * FROM halls where hall_uid =$1',[hallId],(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

const createNewHall = (req,res,next) => {
    const hall={
        id : req.body.hall_uid,
        name : req.body.hall_name,
        address : req.body.hall_address,
        img_i : req.body.img,
        size_s : req.body.size,
        datecreated_d : req.body.datecreated,
        dateupdated_d : req.body.dateupdated
    };
    let query="INSERT INTO halls (hall_uid,hall_name,hall_address,img,size,datecreated,dateupdated) VALUES ('" + 
    hall.id + "','" + hall.name + "','" +hall.address + "','" + req.body.img + "','" + hall.size_s + "','" + 
    hall.datecreated_d + "','" + hall.dateupdated_d + "')";
    db.query(query,(err,result)=>{
    if (err) {
            return next(err);
        }
        res.send('Hall Created successfully');
    });
    //console.log(hall);
}

const hallUpdate = (req,res,next) => {
    const hall={
        id : req.body.hall_uid,
        name : req.body.hall_name,
        address : req.body.hall_address,
        img_i : req.body.img,
        size_s : req.body.size,
        datecreated_d : req.body.datecreated,
        dateupdated_d : req.body.dateupdated
    };
    const hallId=req.params.hallId;
    let query="UPDATE halls SET hall_name='" + hall.name + "', hall_address='" + hall.address + "', img='" + hall.img_i + 
    "', size ='" + hall.size_s + "',datecreated='" + hall.datecreated_d + "',dateupdated='" + hall.dateupdated_d 
    + "' WHERE hall_uid=$1";
    db.query(query,[hallId],(err,result)=>{
        if (err) {
                return next(err);
            }
            res.send('Hall updated successfully');
        });
    console.log(hall);
}

module.exports={
    getHalls,
    getHallsById,
    createNewHall,
    hallUpdate,
    hallDelete,
};