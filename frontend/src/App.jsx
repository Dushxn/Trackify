import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Shared/Footer'
import Browse from './Pages/Browse'
import Navbar from './Shared/Navbar'

function App() {


  return (
    <>
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App
