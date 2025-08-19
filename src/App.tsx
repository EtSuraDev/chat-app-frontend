import axios from "axios";
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000'); // <-- port should be 3000
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1
        className=' font-bold text-2xl text-yellow-800 '
      >
        hello world data
      </h1>
    </>
  )
}

export default App
