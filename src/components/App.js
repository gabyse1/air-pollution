import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ItemDetails from './ItemDetails';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<ItemDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
