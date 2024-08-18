const getJwtToken=require('../helpers/getJwtToken')

const cookieToken=(user,res)=>{
    const token=getJwtToken(user.id);
    const options={
        expires: new Date(
            //3 days from now in millisecs
            Date.now() + 3*24*60*60*1000
        ),
        httpOnly:true           //server only cookie (user can use it)
    }
    user.password=undefined;
    res.status(200).cookie('token',token,options).json({
        success:true,
        token,
        user
    })
}

module.exports=cookieToken; 