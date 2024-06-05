import { useQuery } from '@tanstack/react-query'
import AddTodo from './AddTodo.tsx'
import TodoList from './TodoList.tsx'
import { fetchTodos } from '../apis/apiClient.ts'

function App() {
  const {
    data: todos,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })
  if (isError) {
    return error
  }
  if (isFetching) {
    return <p>...Loading</p>
  }
  if (todos) {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
          <TodoList />
        </header>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}

export default App
