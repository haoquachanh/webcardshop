import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import Products from './components/views/Products';
import Account from './components/views/Account';
import Cart from './components/views/Cart';
import Login from './components/views/LoginForm';
import Register from './components/views/Register';
import Order from './components/views/Order';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import OrderConfirmation from './components/views/OrderConfirmation';
import AccountVerification from './components/views/AccountVerification';
import ManagerHome from './manager_components/views/ManagerHome';
// import Contact from './components/views/Contact';
import Utility from './components/views/Utility';
// import Sidebar from './components/SliderBar';


const App = () => {

  const [orderData, setOrderData] = useState(null);

  const handleOrderData = (data) => {
    setOrderData(data);
    // console.log("haha")
  };
  
  return (
    <BrowserRouter>
      {
        window.location.pathname!=="/managerHome"&&

        <Header />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Products 
          orderData={orderData}
          onOrderData={handleOrderData}/>} 
        />
        <Route path="/account" element={<Account /> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Order />} />
        {/* {alert(isLogined)}; */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation orderData={orderData}/>}/>
        <Route path='/accountVerification' element={<AccountVerification/>}/>
        {/* <Route path="/" element={<RenderClient />} /> */}
        <Route path='/managerHome' element={<ManagerHome/>}/>
        <Route path='/loginForm' element={<Login/>}/>
      </Routes>
      {
        window.location.pathname!=="/managerHome"&&
          <>
            <Utility/>
            <Footer/>
          </>
      }


    </BrowserRouter>
  );
};

export default App;
