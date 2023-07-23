const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')

// register a user
exports.registerUser = async (req,res,next)=>{
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password
    });

    sendToken(user, 201, res);
    console.log('user registered successfully');
}

// login a user
exports.loginUser = async (req,res,next)=>{

    const {email,password} = req.body;
    if(!email || !password)
    {
        return next(new Error("Please Enter Email and Password"))
    }

    const user = await User.findOne({email}).select("password");
    if(!user)
    {
        return next(new Error("Invalid email or password"));
    }

    const isPasswordMatched = user.comparePassword(password);
    if(!isPasswordMatched)
    {
        return next(new Error("Invalid email or password"));
    }
    
    sendToken(user, 201, res);
    console.log('successfully login')
}


// get user details
exports.getUserDetails = async(req,res,next)=>{
    const user = await User.findById(req.user.id);
    res.status(201).json({
        status:true,
        user,
        res_id: req.user.id,    // user here is from auth (req.user)
    })
}

// get all users
exports.getAllUser = async(req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    })
}


// update user password
exports.updatePassword = async(req,res,next)=>{
    const user = await User.findById(req.user._id).select("password");
    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(new Error("old password is incorrect",400));
    }

    if(req.body.newPassword != req.body.confirmPassword){
        return next(new Error("Password doesnt matched",400));
    }

    user.password = req.body.newPassword;
    user.save();
    sendToken(user,200,res);
}


// update user profile
exports.updateProfile = async(req,res,next)=>{
    const newData = {
        name:req.body.name,
        email:req.body.email,
    }
    const user = await User.findByIdAndUpdate(req.user.id,newData,{
        new:true,
    });

    res.status(200).json({
        success:true,
        user
    })
}


// delete user
exports.deleteUser = async (req,res,next)=>{
    await User.findByIdAndDelete(req.user.id)

    res.status(201).
    json({
        success:true,
        message:"user deleted successfully"
    })
}

// reset password

// forget password