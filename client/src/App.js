import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PurchaseOrderContainer } from './components/purchaseOrders/PurchaseOrderContainer';
import { VendorContainer } from './components/vendors/VendorContainer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/vendors" element={<VendorContainer />} />
        <Route path="/purchaseorders" element={<PurchaseOrderContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
