import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Error from './components/Error/Error';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/review" element={<OrderReview />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
