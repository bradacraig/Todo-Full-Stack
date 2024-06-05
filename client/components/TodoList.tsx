function TodoList() {
  const fakeTodos = [
    { id: 1, task: 'vaccuum the driveway', completed: true },
    { id: 2, task: 'remove bugs from garage', completed: false },
    { id: 3, task: 'ask insects to leave', completed: false },
  ]

  return (
    <>
      <div>To Do List:</div>
      <ul>
        {fakeTodos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
