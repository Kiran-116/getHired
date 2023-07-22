const express = require('express')
const router = express.Router();

const {isAuthenticatedCompany, isAuthenticatedUser} = require('../middleware/auth')
const {registerUser, loginUser, getUserDetails, getAllUser, updatePassword, updateProfile} = require('../controllers/userController');
const {registerCompany, loginCompany, getCompanyrDetails, getAllCompany, updatePasswordCompany}  = require('../controllers/companyController');
const {createJob} = require('../controllers/jobController')


// user routes
router.post('/user/register',registerUser);
router.post('/user/login',loginUser);
router.route('/user/me').get(isAuthenticatedUser,getUserDetails);
router.route('/user/password/update').put(isAuthenticatedUser,updatePassword);
router.route('/user/me/update').put(isAuthenticatedUser,updateProfile);

// company routes
router.post('/company/register',registerCompany);
router.post('/company/login',loginCompany);
router.route('/company/me').get(isAuthenticatedCompany,getCompanyrDetails);
router.route('/company/password/update').put(isAuthenticatedCompany,updatePasswordCompany);


// job routes
router.post('/job/create',isAuthenticatedCompany,createJob);




// placementor admin only
// router.route('/admin/users').get(isAuthenticatedRole, authorizeRoles(),getAllUser);
// router.route('/admin/companys').get(isAuthenticatedRole, authorizeRoles(),getAllCompany);


module.exports = router;