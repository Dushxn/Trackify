import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Shared/Components/Navbar'
import Footer from './Shared/Footer'

function App() {


  return (
    <>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App
