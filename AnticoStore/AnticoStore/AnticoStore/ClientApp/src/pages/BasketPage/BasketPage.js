import React, { Fragment, useContext } from "react";
import Basket from "../../components/Basket/Basket";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AccountPage = () => {
 

  return (
    <Fragment>
        <Header/>
        <Basket/>
        <Footer/>
    </Fragment>
  );
};

export default AccountPage;