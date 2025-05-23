import './App.css'
import useTime from './hooks/useTime.ts'

function App() {
  const hour = useTime<string>("hour")
  const day = useTime<string>("day")

  return (
    <>
      <p>Hour: {hour}</p>
      <p>Day: {day}</p>
    </>
  )
}

export default App
