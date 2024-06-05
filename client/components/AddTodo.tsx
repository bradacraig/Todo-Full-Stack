import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addTodo } from '../apis/apiClient'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const queryClient = useQueryClient()
  const addTodoMutation = useMutation({
    mutationFn: (task: string) => addTodo(task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
  const [form, setForm] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTodoMutation.mutate(form)
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="task">New Todo:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="task"
          name="task"
          className="new-todo"
          placeholder="What needs to be done?"
          value={form}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddTodo
