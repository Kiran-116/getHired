class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          title: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    // Removing some fields not needed for job filtering
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Create a copy of the original query to avoid conflicts
    let filteredQuery = this.query.find();

    // Filter For Location, Job Category, Job Type, and Experience Level with regex support
    if (queryCopy.location) {
      filteredQuery = filteredQuery.find({ location: { $regex: queryCopy.location, $options: "i" } });
    }

    if (queryCopy.job_category) {
      filteredQuery = filteredQuery.find({ job_category: { $regex: queryCopy.job_category, $options: "i" } });
    }

    if (queryCopy.job_type) {
      filteredQuery = filteredQuery.find({ job_type: { $regex: queryCopy.job_type, $options: "i" } });
    }

    if (queryCopy.experience_level) {
      filteredQuery = filteredQuery.find({ experience_level: { $regex: queryCopy.experience_level, $options: "i" } });
    }

    if (queryCopy.skills_required) {
      filteredQuery = filteredQuery.find({ skills_required: { $regex: queryCopy.skills_required, $options: "i" } });
    }

    this.query = filteredQuery;
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
