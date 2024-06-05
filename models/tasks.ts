export interface Task {
  id: number
  task: string
  completed: boolean
}

// export without id, opposite of extends method
export type TaskData = Omit<Task, 'id'>
