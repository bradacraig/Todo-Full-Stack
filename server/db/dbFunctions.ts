import { Task, TaskData } from '../../models/tasks'
import connection from './connection'

// READ
export function getAllTasks(): Promise<Task[]> {
  return connection('todos').select()
}

export function getTaskById(id: number): Promise<Task> {
  return connection('todos').where({ id }).first()
}

// UPDATE
export function updateTask(id: number, task: string) {
  return connection('todos').where({ id }).update({ task })
}
// CREATE
export function createTask(newTask: TaskData) {
  return connection('todos').insert(newTask)
}
// DELETE
export function deleteTask(id: number) {
  return connection('todos').where({ id }).del()
}
