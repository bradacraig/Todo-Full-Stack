export async function fetchTodos() {
  const fakeTodos = [
    {
      id: 1,
      task: 'vaccuum the dog',
      completed: 1,
    },
    {
      id: 2,
      task: 'remove bugs from garage',
      completed: 0,
    },
    {
      id: 3,
      task: 'ask insects to leave',
      completed: 0,
    },
    {
      id: 4,
      task: 'polish silver with bananas',
      completed: 0,
    },
  ]

  return fakeTodos
}

export async function addTodo(todo: string) {
  console.log("I'm the api: ", todo)
  return Promise.resolve(todo) //TODO implement this
}
