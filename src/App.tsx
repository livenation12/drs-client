import './App.css'
import { ModeToggle } from './components/ModeToggler'
import { Button } from './components/ui/button'
import { useAccessLevelsQuery } from './services/accessLevelsApi'

function App() {
  const { data, error, isLoading, isSuccess, isFetching } = useAccessLevelsQuery()
  return (
    <>
      <ModeToggle />
      <Button>Button</Button>
      {isLoading && <div>Loading...</div>}
      {isFetching && <div>Fetching...</div>}
      {error && <div>{JSON.stringify(error)}</div>}
      {isSuccess && <div>{JSON.stringify(data)}</div>}
    </>
  )
}

export default App
