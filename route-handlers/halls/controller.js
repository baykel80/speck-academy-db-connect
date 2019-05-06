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
    console.log(req.params);
    db.query('SELECT * FROM halls where hall_uid =$1',[hallId],(err,result)=>{
        if(err){
            return next(err);
        }
        res.send(result.rows);
    });
}

module.exports={
    getHalls,
    getHallsById,
};