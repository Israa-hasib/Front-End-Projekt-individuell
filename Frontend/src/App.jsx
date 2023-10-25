import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Components/Homepage/Homepage'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />

          {/* <Route path='update/:id' element={<Update />} /> */}

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App