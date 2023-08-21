import { BrowserRouter, Route, Routes } from 'react-router-dom'




import Home from './pages/Home'
import Request from './pages/Request'
import Order from './pages/Order'
import Navbar from './components/Navbar'

function App() {

  return (

<BrowserRouter>
<Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
