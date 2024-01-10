import React, { Fragment, useContext } from "react";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AccountPage = () => {
 

  return (
    <Fragment>
        <Header/>
        <Account/>
        <Footer/>
    </Fragment>
  );
};

export default AccountPage;
