const Company = require('../models/companyModel')
const sendToken = require('../utils/jwtToken');
const Jobs = require('../models/jobModel')

// register a company
exports.registerCompany = async (req,res,next)=>{
    // const { name, email, password } = req.body;
    // const user = await Company.create({
    //   name,
    //   email,
    //   password
    // });

    const user = await Company.create(req.body)

    sendToken(user, 201, res);
    console.log('Company registered successfully');
}

// login a Company
exports.loginCompany = async (req,res,next)=>{

    const {email,password} = req.body;
    if(!email || !password)
    {
        return next(new Error("Please Enter Email and Password"))
    }

    const user = await Company.findOne({email}).select("password");
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


// get Company details
exports.getCompanyrDetails = async(req,res,next)=>{
    const user = await Company.findById(req.user.id);
    res.status(201).json({
        status:true,
        user,
        res_id: req.user.id,    // user here is from auth (req.user)
    })
}

// get all Company (placeMentor)
exports.getAllCompany = async(req,res,next)=>{
    const company = await Company.find();
    res.status(200).json({
        success:true,
        company,
    })
}


// update Company password
exports.updatePasswordCompany = async(req,res,next)=>{
    const user = await Company.findById(req.user._id).select("password");
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


// update Company profile
exports.updateCompany = async(req,res,next)=>{
    const newData = {
        description:req.body.description,
    }

    const job = await Job.findByIdAndUpdate(req.user.id,)
}


// delete Company
exports.deleteCompany = async (req,res,next)=>{
    await Company.findByIdAndDelete(req.user.id);
    await Jobs.deleteMany({company:req.user._id});

    res.status(201)
    .json({
        success:true,
        message:"company is successfully deleted"
    })
}

// reset password

// forget password