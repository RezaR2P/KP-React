import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";
import rengeImage from "./assets/img/renge.jpg";
import nyanpasuImage from "./assets/img/Nyanpasu.jpg";

function App() {
  return (
    <>
      <header id="home" className="text-white text-center py-4">
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

        <form id="table-form" className="p-4 rounded shadow-sm">
          <FloatingLabel
            controlId="floatingName"
            label="Masukkan Nama"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Masukkan Nama" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingHp"
            label="Masukkan No HP"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="No HP"
              pattern="\d{12,}"
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextArea" label="Komentar">
            <Form.Control
              as="textarea"
              placeholder="Tinggalkan Komen Di sini..."
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button
            type="submit"
            className="mt-3 w-100 text-black "
            style={{ backgroundColor: "#CCD0D5" }}
          >
            Submit
          </Button>
        </form>

        <table
          id="services"
          className="table table-dark table-hover table-bordered rounded table-striped mt-5"
        >
          <thead id="data-head">
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

        <div id="temp-conversion" className="p-4 rounded shadow-sm mt-5">
          <h3 id="conversion-title">Convert Fahrenheit to Celsius</h3>
          <form id="conversion-form">
            <div className="form-group">
              <label htmlFor="fahrenheit">Fahrenheit</label>
              <input type="text" id="fahrenheit" className="form-control" />
            </div>
            <Button
              type="submit"
              className="mt-3 w-100 text-black "
              style={{ backgroundColor: "#CCD0D5" }}
            >
              Submit
            </Button>
          </form>
          <div id="result" className="mt-3"></div>
        </div>
      </main>

      <footer id="footer" className="bg-dark text-white text-center py-4">
        <p id="copyright">
          Created with <i className="bi bi-suit-heart-fill text-danger"></i> by
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/RezaR2P"
            data-toggle="tooltip"
            title="Visit my GitHub profile"
          >
            <span style={{ color: "white" }}> RezaR2P</span>
          </a>
        </p>
        <div id="clock" className="mt-1"></div>
      </footer>
    </>
  );
}

export default App;
