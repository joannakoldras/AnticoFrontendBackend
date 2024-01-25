import React, { Fragment, useState } from "react";
import "./Add.css";

function Add() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  //const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //const [images, setImages] = useState([]);
  const [images, setImages] = useState("");
  const [isAvaliable, setIsAvailable] = useState(true); // Added isAvailable state
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    try {
      setLoading(true);
      const formData = {
        name,
        category,
        price,
        description,
        images,
        isAvaliable, 
      };

      const response = await fetch('https://localhost:44343/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include an authentication token if your backend requires it
          // 'Authorization': `Bearer ${YOUR_AUTH_TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        
        console.log('Advertisement added successfully!');
      } else {
        
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error adding advertisement:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Fragment>
      {loading && <div>Loading...</div>} 
      <div className="centerDiv">
        <p> Dodaj ogłoszenie</p>

        <div className="title">
          <label>Tytuł</label>
          <input
            className="input"
            type="text"
            name="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="description">
          <label>Opis</label>
          <textarea
            className="input"
            type="textarea"
            name="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        {/* <div className="location">
          <label>Lokalizacja</label>
          <input
            className="input"
            type="text"
            name="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div> */}

        <div className="categories">
          <label>Kategoria</label>
          <select
            className="input"
            name="Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>Wybierz kategorie</option>
            <option value="malarstwo">malarstwo</option>
            <option value="niżuteria">biżuteria</option>
            <option value="meble">Meble</option>
            <option value="lampy">Lampy</option>
            <option value="porcelain&ceramics">Porcelana i ceramika</option>
            <option value="literatura">Literatura</option>
            <option value="pozostałe">Pozostałe</option>
          </select>
        </div>
        <br />

        <div className="price">
          <label>Cena</label>
          <input
            className="input"
            type="number"
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="availability">
          <label>Dostępność</label>
          <input
            className="input"
            type="checkbox"
            checked={isAvaliable}
            onChange={(e) => {
              setIsAvailable(e.target.checked);
            }}
          />
        </div>

        <div className="posts">
          {/* {images.map((img, index) => (
            <img
              key={index}
              alt={`Post ${index}`}
              width="200px"
              height="200px"
              src={URL.createObjectURL(img)}
            />
          ))}
          <br />
          <input
            type="file"
            onChange={(e) => {
              setImages([...images, e.target.files[0]]);
            }}
          /> */}
          <label>Images</label>
          <input
            className="input"
            type="string"
            name="images"
            value={images}
            onChange={(e) => {
              setImages(e.target.value);
            }}
          />
          <br />
          <button className="uploadBtn" onClick={handleAddProduct}>
            Dodaj ogłoszenie
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Add;