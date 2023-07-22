const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();


const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    // required: true
  },
  location: {
    type: String
  },
  website: {
    type: String
  },
  industry: {
    type: String
  },
  founded: {
    type: Date
  },
  logo: {
    type: String
  },
  contacts: [{
    name: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      // required: true
    },
    phone: {
      type: String
    }
  }],
  projects: [{
    name: {
      type: String,
      // required: true
    },
    description: {
      type: String,
      // required: true
    },
    read_more: {
      type: String
    },
    technology_used: [{
      type: String
    }]
  }]
});

companySchema.pre("save", async function (next){
    if(!this.isModified("password"))
    {
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});

// JWT Token
companySchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, 'ljklkj237847sdfujdssd@$#$%#$%jsdfj289', {
        expiresIn: "1d",
    });
};

// compare password
companySchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
};


module.exports = mongoose.model('Company', companySchema);

