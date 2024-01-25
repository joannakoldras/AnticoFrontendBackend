import React, { Fragment, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DocumentationPage = () => {
 

  return (
    <Fragment>
        <Header/>
        <a href="/public/Documentacja.pdf" download="dokumentacja_dla_użytkowników.pdf">Pobierz dokumentację</a>
        <Footer/>
    </Fragment>
  );
};

export default DocumentationPage;