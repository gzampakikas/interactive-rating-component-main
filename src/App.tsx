import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import RateResult from './components/RateResult';
import Rating from './components/Rating';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Rating />} />
          <Route path="/rate-result" element={<RateResult />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;