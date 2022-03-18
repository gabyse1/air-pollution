import '../scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ItemDetails from './ItemDetails';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<ItemDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
