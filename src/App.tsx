import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Initial from "./pages/initial"
import Prompts from "./pages/prompts"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/prompts" element={<Prompts />} />
      </Routes>   
    </Router>
  )
}

export default App
