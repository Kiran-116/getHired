const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const Company = require('../models/companyModel');


exports.isAuthenticatedUser = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new Error("Please Login to access this resource"));
    }   

    const decodedData = jwt.verify(token,"ljklkj237847sdfujdssd@$#$%#$%jsdfj289")
    req.user = await User.findById(decodedData.id);
    // console.log(token);
    next();
};


exports.isAuthenticatedCompany = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new Error("Please Login to access this resource"));
    }   

    const decodedData = jwt.verify(token,"ljklkj237847sdfujdssd@$#$%#$%jsdfj289")
    req.user = await Company.findById(decodedData.id);
    next();
};
