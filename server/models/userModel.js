const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength:[100,"Name cannot exceed 100 characters"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  date_joined: {
    type: Date,
    default: Date.now
  },
  is_active: {
    type: Boolean,
    default: true
  },
  bio: {
    type: String
  },
  technical_skills: [{
    type: String
  }],
  soft_skills: [{
    type: String
  }],
  experience: {
    type: Number,
    default: 0
  },
  jobApplied:[
    {
        job_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            // required: true
          },
          status: {
            type: String,
            enum: ['applied', 'under_review', 'accepted', 'rejected'],
            default: 'applied'
          },
          application_date: {
            type: Date,
          }
    }
  ],
  certificates: [{
    type: String
  }],
  role: {
    type: String,
    default: "user",
  },
  social_media_urls: [{
    name: {
      type: String,
      // required: true
    },
    url: {
      type: String,
      // required: true
    }
  }],
  resume: {
    type: String
  },
  education: {
    education: {
      type: String,
      // required: true
    },
    marks: {
      type: String,
      // required: true
    },
    passingYear: {
      type: Number,
      // required: true
    }
  }
});

userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
    {
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

// JWT Token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, 'ljklkj237847sdfujdssd@$#$%#$%jsdfj289', {
        expiresIn: "5d",
    });
};

// compare password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
};


module.exports = mongoose.model('User', userSchema);

