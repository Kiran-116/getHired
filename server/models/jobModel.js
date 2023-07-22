const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  location: {
    type: String
  },
  job_type: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship']
  },
  experience_level: {
    type: String,
    enum: ['Entry-Level', 'Mid-Level', 'Senior']
  },
  skills_required: [{
    type: String
  }],
  education_required: {
    type: String
  },
  salary: {
    type: String
  },
  posted_date: {
    type: Date,
    default: Date.now
  },
  expiration_date: {
    type: Date
  },
  is_active: {
    type: Boolean,
    default: true
  },
  benefits: [{
    type: String
  }],
  work: {
    from: {
      type: String
    },
    schedule: {
      type: String
    },
    days_in_week: {
      type: Number
    }
  },
  job_category: [
    {
        type: String,
    }
],
  duration: {
    type: String
  }
});

module.exports= mongoose.model('Job', jobSchema);
