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

const createNewUser = (req,res,next) => {
    let query="INSERT INTO users (user_uid,first_name,last_name,email,user_password,date_created,date_updated)  VALUES ('" + 
    req.body.user_uid + "','" + req.body.first_name + "','" +req.body.last_name + "','" 
    + req.body.email+ "','" + req.body.user_password + "','" + req.body.date_created + "','" + req.body.date_updated + "')";
    db.query(query,(err,result)=>{
    if (err) {
            return next(err);
        }
        res.send('User created successfully');
    });
}

const userUpdate = (req,res,next) => {
    //console.log(req.body);
    const userId=req.params.usersId;
    let query="UPDATE users SET first_name='" + req.body.first_name + "', last_name='" 
    + req.body.last_name + "', email='" + req.body.email + "', user_password ='" + req.body.user_password 
    + "',date_created='" + req.body.date_created + "',date_updated='" + req.body.date_updated + "' WHERE user_uid=$1";
    db.query(query,[userId],(err,result)=>{
        if (err) {
                return next(err);
            }
            res.send('User updated successfully');
        });
}

module.exports={
    getUsers,
    getUsersById,
    createNewUser,
    userUpdate,
    //reservationDelete,
};