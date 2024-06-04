import { Router } from 'express'
import * as db from '../db/dbFunctions.ts'

const router = Router()

// GET ALL

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.sendStatus(500)
  }
})

// GET BY ID

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = await db.getTaskById(id)
    res.json(task)
  } catch (error) {
    res.sendStatus(500)
  }
})

// UPDATE BY ID

export default router
