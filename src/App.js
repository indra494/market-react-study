import './App.css';
import MainPageComponent from './main/index.js';
import { Routes, Route } from "react-router-dom";
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  return (
    <div>
      <div id="header">
          <div id="header-area">
              <img src="/images/icons/logo.png" />
          </div>
      </div>
      <div id="body">
        <Routes>
          <Route  path="/" element={<MainPageComponent />} />
          <Route  path="/products/:id" element={<ProductPage />} />
          <Route  path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
