import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

import rengeImage from "./assets/img/renge.jpg";
import nyanpasuImage from "./assets/img/Nyanpasu.jpg";

function App() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    number: "",
    komentar: "",
  });

  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleConversion = (e) => {
    e.preventDefault();
    const fah = parseFloat(fahrenheit);
    if (!isNaN(fah)) {
      setCelsius(((fah - 32) * 5) / 9);
    }
  };

  return (
    <div className="App md-12">
      <header id="home" className="bg-dark text-white text-center py-4">
        <img
          src={rengeImage}
          alt="Logo"
          className="rounded-circle"
          width="100"
          height="100"
        />
        <nav className="nav justify-content-center md-12">
          <a className="nav-link text-white" href="#home">
            Home
          </a>
          <a className="nav-link text-white" href="#about">
            About
          </a>
          <a className="nav-link text-white" href="#services">
            Services
          </a>
          <a className="nav-link text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="about" className="container mt-3">
        <div className="gambar d-flex justify-content-center">
          <a
            href="https://www.instagram.com/sjhdskd/"
            className="d-flex justify-content-center w-25 mb-3"
          >
            <img
              src={nyanpasuImage}
              alt="Renge"
              className="img-fluid rounded-4"
            />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          id="table-form"
          className="bg-white p-4 rounded shadow-sm"
        >
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="form-control"
              value={formData.nama}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">No HP</label>
            <input
              type="text"
              name="number"
              id="number"
              pattern="\d{12,}"
              required
              className="form-control"
              value={formData.number}
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="komentar">Komentar</label>
            <textarea
              name="komentar"
              id="komentar"
              cols="20"
              rows="2"
              className="form-control"
              value={formData.komentar}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">
            Kirim
          </button>
        </form>

        <table id="services" className="table table-striped mt-5">
          <thead className="thead-dark">
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Number</th>
              <th>Komentar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="data-table">{/* Table rows go here */}</tbody>
        </table>
        <div
          id="temp-conversion"
          className="bg-light p-4 rounded shadow-sm mt-5"
        >
          <h3>Convert Fahrenheit to Celsius</h3>
          <form onSubmit={handleConversion} id="conversion-form">
            <div className="form-group">
              <label htmlFor="fahrenheit">Fahrenheit</label>
              <input
                type="text"
                id="fahrenheit"
                className="form-control"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9.]/g, ""))
                }
              />
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              Convert
            </button>
          </form>
          {celsius !== null && (
            <div id="result" className="mt-3">
              {fahrenheit} Fahrenheit is {celsius.toFixed(2)} Celsius
            </div>
          )}
        </div>
      </main>

      <footer id="contact" className="bg-dark text-white text-center py-4">
        <p id="copyright">
          Created with <i className="bi bi-suit-heart-fill text-danger"></i> by
          <a
            href="https://github.com/RezaR2P"
            data-toggle="tooltip"
            title="Visit my GitHub profile"
          >
            RezaR2P
          </a>
        </p>
        <div id="clock" className="mt-1"></div>
      </footer>
    </div>
  );
}

export default App;
