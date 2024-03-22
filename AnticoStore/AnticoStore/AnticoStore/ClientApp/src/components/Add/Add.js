import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Add() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [isAvaliable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    try {
      setLoading(true);

      const processedImages = await convertImagesToBase64(images);

      const formData = {
        name,
        category: parseInt(category),
        price,
        description,
        FilePathPhoto: processedImages.join(","),
        isAvaliable,
      };

      console.log('Sending Payload:', formData);

      const response = await fetch('https://localhost:44343/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Backend Response:', result);

      if (result.success) {
        navigate("/");
        console.log('Advertisement added successfully!');

      } else {
        console.error(result.message);

        if (result.errors) {
          console.error('Validation errors:', result.errors);
        }
      }
    } catch (error) {
      console.error('Error adding advertisement:', error);
    } finally {
      setLoading(false);
    }
  };

  const convertImagesToBase64 = (images) => {
    const promises = [];
    images.forEach((image) => {
      promises.push(
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result.split(",")[1]); // Get base64 string without data URL prefix
          };
          reader.onerror = reject;
          reader.readAsDataURL(image);
        })
      );
    });
    return Promise.all(promises);
  };

  const handleFileInputChange = (e) => {
    const fileList = Array.from(e.target.files);
    setImages(fileList);
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
            <option value="1">malarstwo</option>
            <option value="2">biżuteria</option>
            <option value="3">meble</option>
            <option value="4">lampy</option>
            <option value="5">porcelana i ceramika</option>
            <option value="6">literatura</option>
            <option value="7">pozostałe</option>
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
              const newPrice = e.target.value < 0 ? 0 : e.target.value; // Sprawdzenie, czy cena jest ujemna
              setPrice(newPrice);
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
          <input
            className="input"
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileInputChange}
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