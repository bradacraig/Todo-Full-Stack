import request from 'superagent'
import { Task, TaskData } from '../../models/tasks'

const rootURL = '/api/v1/todos/'

export async function fetchTodos(): Promise<Task[]> {
  const response = await request.get(rootURL)
  return response.body
}

export async function addTodo(todo: string) {
  console.log("I'm the api: ", todo)

  const newTask: TaskData = {
    task: todo,
    completed: false,
  }
  await request.post(rootURL).send(newTask)
  // return Promise.resolve(todo) //TODO implement this
}

export async function updateTodo(updatedTodo: string, id: number) {
  await request.patch(`${rootURL}${id}`).send(updatedTodo)
}

// export async function deleteTodo(todo:string, id:number) {
//   await request.delete(`${rootURL}${id}`)

// }
