import express from "express"
import imageHandler from "../middlewares/imageHandler"
const router = express.Router()

router.get("/", getTeams)
router.get("/id/:id", getTeam)
router.post("/", imageHandler, addTeam)
router.patch("/id/:id", editTeam)
router.delete("/id/:id", deleteTeam)

export default router