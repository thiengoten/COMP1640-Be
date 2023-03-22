var express = require('express');
var router = express.Router();

const {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  updateDepartment,
  getDepartmentById,
  addMember,
  getMembers,
  getMemberById,
  deleteMember,
} = require('../../controllers/DepartmentController');
const { adminRole } = require('../../permission/author');

//Method GET
router.get('/', adminRole, getAllDepartments);
router.get('/:id', adminRole, getDepartmentById);

router.get('/members/:id', adminRole, getMembers);
router.get('/members/:id/:memberId', adminRole, getMemberById);

//Method POST
router.post('/', adminRole, createDepartment);
router.post('/members/:id', adminRole, addMember);

//Method PATCH
router.patch('/:id', adminRole, updateDepartment);

//Method DELETE
router.delete('/:id', adminRole, deleteDepartment);
router.delete('/members/:id/:memberId', adminRole, deleteMember);

module.exports = router;
