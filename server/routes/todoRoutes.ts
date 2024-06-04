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

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { task, completed } = req.body
    await db.updateTask({ id, task, completed })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

// CREATE

router.post('/', async (req, res) => {
  try {
    const newTask = req.body
    await db.createTask(newTask)
    res.sendStatus(201)
  } catch (error) {
    res.sendStatus(500)
  }
})

// DELETE

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
