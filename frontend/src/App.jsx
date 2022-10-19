import { useState } from 'react'
import Homepage from "./components/homepage/homepage"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
