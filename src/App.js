import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import desserts from './dessert-data.js';
import AboutUs from './AboutUs';
import Welcome from './Welcome';
import DessertProduct from './Products.js'
import PopsicleContext from './PopsicleContext';
import { DessertProvider } from './DessertProvider';



function App() {
  
  return (
    <DessertProvider>
      <div style={{ textAlign: 'center' }}>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route index element={<Welcome />}/>
                  <Route path="about-us" element={<AboutUs />} />
                  <Route path="product/:dessertId" element={<DessertProduct />}/>
                  <Route path="product" element={<DessertProduct />} />
                </Route>
            </Routes>
        </BrowserRouter> 
        
      </div>
    </DessertProvider>
  );
}

export default App;
