import React, { Fragment, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DocumentationPage = () => {
 

  return (
    <Fragment>
        <Header/>
        <div className="content-container">
        
        Pomoc
        <br/>
        W tym pliku zostały opisane poszczególne akcję, żeby pomóc użytkownikom.
        <br/>
        <a href="/public/Dokumentacja.pdf" download="dokumentacja_dla_użytkowników.pdf">Pobierz dokumentację</a>
        <br/>
        Dla zgłoszenia błądu proszę pisać na antico@gmail.com

        
      </div>
        <Footer/>
    </Fragment>
  );
};

export default DocumentationPage;