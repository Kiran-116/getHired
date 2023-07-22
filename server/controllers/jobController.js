const Job = require('../models/jobModel')
const ApiFeatures = require('../utils/apiFeatures')

// create JOB -- admin
exports.createJob = async (req,res,next)=>{
    req.body.company = req.user.id;

    const job = await Job.create(req.body);

    res
        .status(201)
        .json({
            success:true,
            job
        })
}

