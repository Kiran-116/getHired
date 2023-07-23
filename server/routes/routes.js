const express = require('express')
const router = express.Router();

const {isAuthenticatedCompany, isAuthenticatedUser} = require('../middleware/auth')
const {registerUser, loginUser, getUserDetails, getAllUser, updatePassword, updateProfile, deleteUser} = require('../controllers/userController');
const {registerCompany, loginCompany, getCompanyrDetails, getAllCompany, updatePasswordCompany, deleteCompany}  = require('../controllers/companyController');
const {createJob, getAllJobs, getAllCompanyJobs} = require('../controllers/jobController')


// user routes
router.post('/user/register',registerUser);
router.post('/user/login',loginUser);
router.route('/user/me').get(isAuthenticatedUser,getUserDetails);
router.route('/user/password/update').put(isAuthenticatedUser,updatePassword);
router.route('/user/me/update').put(isAuthenticatedUser,updateProfile);
router.get('/user/me/delete',isAuthenticatedUser, deleteUser);

// company routes
router.post('/company/register',registerCompany);
router.post('/company/login',loginCompany);
router.route('/company/me').get(isAuthenticatedCompany,getCompanyrDetails);
router.route('/company/password/update').put(isAuthenticatedCompany,updatePasswordCompany);
router.get('/company/me/delete',isAuthenticatedCompany,deleteCompany)


// job routes
router.post('/job/create',isAuthenticatedCompany,createJob);
router.get('/job/alljobs',getAllJobs);
router.get('/jobs/me',isAuthenticatedCompany,getAllCompanyJobs);



// placementor admin only
// router.route('/admin/users').get(isAuthenticatedRole, authorizeRoles(),getAllUser);
// router.route('/admin/companies').get(isAuthenticatedRole, authorizeRoles(),getAllCompany);


module.exports = router;