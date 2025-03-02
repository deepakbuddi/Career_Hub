import express from "express";
import {deleteJob, getAllJobs, getmyJobs, postJob, updateJob, getSingleJob} from '../controllers/jobController.js';
import {isAuthenticated} from '../middlewares/auth.js'

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post",isAuthenticated, postJob);
router.get("/getmyjobs",isAuthenticated, getmyJobs);
router.put("/update/:id",isAuthenticated, updateJob);
router.delete("/delete/:id",isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;