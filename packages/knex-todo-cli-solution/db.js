import config from './knexfile.js'
import { knex } from 'knex'
const database = knex(config.development)

export {
  getAll,
  addTodo,
  completeTodo,
  deleteTodo,
  findTodos,
  updateTodo,
  close,
}

function getAll(db = database) {
  return db('todos').select()
}

function addTodo(task, db = database) {
  return db('todos').insert({ task })
}

function completeTodo(id, db = database) {
  return db('todos').where('id', id).update({ completed: true })
}

function deleteTodo(id, db = database) {
  return db('todos').where('id', id).del()
}

function findTodos(todo, db = database) {
  return db('todos').where('task', 'like', `%${todo}%`).select()
}

function updateTodo(id, task, db = database) {
  return db('todos').where('id', id).update({ task: task })
}

function close(db = database) {
  return db.destroy()
}
