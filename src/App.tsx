import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home'
import Request from './pages/Request'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import InvalidData from './components/InvalidData';

function App() {

  return (

<Router>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/order" element={<InvalidData />}/>
        <Route path="/order/:orderData" element={<Order />}/>
      </Routes>
</Router>

  )
}

export default App
