import React, { Fragment, useState, useContext } from "react";
import "./Add.css";

const Add = () => {

  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);
  return (
    <Fragment>
    { loading  }
      <div className="centerDiv">
      <p> Dodaj ogłoszenie</p>
        <label>Tytuł</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Kategoria:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        > <option >Wybierz kategorie</option>
          <option value="painting">Malarstwo</option>
          <option value="jewelry">Biżuteria</option>
          <option value="furniture">Meble</option>
          <option value="lamps">Lampy</option>
          <option value="porcelain&ceramics">Porcelana i ceramika</option>
          <option value="literature">Literatura</option>
          <option value="other">Pozostałe</option>
        </select>
        <br />
        <label>Cena</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Opis</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" >
          Dodaj ogłoszenie
        </button>
      </div> 
    </Fragment>
  );
};

export default Add;