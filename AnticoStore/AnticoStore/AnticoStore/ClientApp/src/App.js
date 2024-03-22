import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SighupPage/SignupPage'
import AddPage from './pages/AddPage/AddPage'
import AccountPage from './pages/AccountPage/AccountPage'
import ProfileInformationPage from './pages/ProfileInformationPage/ProfileInformationPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CatagoryPage/CategoryPage';
import DocumentationPage from './pages/DocumentationPage/DocumentationPage';
import BasketPage from './pages/BasketPage/BasketPage';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav>
          
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/Register" element={<SignupPage/>} />
          <Route path="/addpost" element={<AddPage/>} />
          <Route path="/account" element={<AccountPage/>} />
          <Route path="/profileinformation" element={<ProfileInformationPage/>} />
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/documentation" element={<DocumentationPage/>} />
          <Route path="/basket" element={<BasketPage/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;