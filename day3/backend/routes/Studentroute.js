const express=require("express");
const router=express.Router();
const {addStudent,getAllStudents,getStudentById,updateStudentById,deleteStudentById}=require("../controller/StudentController");
router.post("/addstudent",addStudent);
router.get("/getallstudents",getAllStudents);
router.get("/getstudentbyid/:id", getStudentById);
router.put("/updatestudentbyid/:id", updateStudentById);
router.delete("/deletestudentbyid/:id", deleteStudentById);

module.exports=router;