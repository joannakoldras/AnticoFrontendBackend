import React, { Fragment, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProfileInformation from "../../components/Profileinformation/ProfileInformation";

const ProfileInformationPage = () => {
 

  return (
    <Fragment>
        <Header/>
        <ProfileInformation/>
        <Footer/>
    </Fragment>
  );
};

export default ProfileInformationPage;