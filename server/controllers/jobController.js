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


// get all jobs
exports.getAllJobs = async(req,res,next)=>{
    const resultPerPage = 8;
    const jobsCount = await Job.countDocuments();


    const apiFeature = new ApiFeatures(Job.find(), req.query)
        .search()
        .filter();

    let jobs = await apiFeature.query;
    
    let filteredJobsCount = jobs.length;

    // apiFeature.pagination(resultPerPage);

    // jobs = await apiFeature.query;

    res.status(200).json({
        success: true,
        jobsCount,
        // resultPerPage,
        filteredJobsCount,
        query: req.query,
        jobs:jobs
    });
}


exports.getAllCompanyJobs = async(req,res,next)=>{
    const jobs = await Job.find({company:req.user._id});

    res.status(201)
        .json({
            success:true,
            jobs
        })
}
