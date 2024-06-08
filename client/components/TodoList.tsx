import { Task } from '../../models/tasks'
import useDeleteTodo from '../hooks/useDeleteTodo'

interface Props {
  todos: Task[]
}

// Task {
//   id: number
//   task: string
//   completed: boolean
// }

export default function TodoList({ todos }: Props) {
  const deleteTodo = useDeleteTodo()

  const handleDelete = async (
    id: number,
    e: { preventDefault: () => void },
  ) => {
    e.preventDefault()
    deleteTodo.mutate(id)
  }

  return (
    <>
      <div>To Do List:</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button
              className="delete-btn"
              onClick={(e) => handleDelete(todo.id, e)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
