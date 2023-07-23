const Job = require('../models/jobModel')
const ApiFeatures = require('../utils/apiFeatures')

// create JOB -- admin
exports.createJob = async (req,res,next)=>{
    req.body.company = req.user.id;

    const jobs = [];

    req.body.forEach(async (jobData)=>{
        jobData.company = req.user.id;
        const job = await Job.create(jobData);
        await jobs.push(job);
    })

    // const job = await Job.create(req.body);

    res
        .status(201)
        .json({
            success:true,
            jobs
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


// delete job with id
exports.delteJobWithId = async(req,res,next)=>{
    const job = Job.findByIdAndDelet(req.params.id);
    res.status(201).json({
        success:true,
        message:"job deleted successfully"
    })
}


// top 5 latest jobs
exports.getLatestIntern = async(req,res,next)=>{
    const interns = await Job.find({job_type:"Internship"}).sort({posted_date: -1}).limit(5);
    res.status(201).json({
        success:true,
        interns
    })
}

// top 5 lates full time jobs
exports.getLatestJob = async(req,res,next)=>{
    const jobs = await Job.find({job_type: "Full-Time"}).sort({posted_date: -1}).limit(5);
    res.status(201).json({
        success:true,
        jobs
    })
}

// get the jobs of particular company
exports.getAllCompanyJobs = async(req,res,next)=>{
    const jobs = await Job.find({company:req.user._id});

    res.status(201)
        .json({
            success:true,
            jobs
        })
}
