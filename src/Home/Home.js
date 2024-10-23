import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
// image imports
import Slide1 from "../Images/slide-1.jpg";
import Slide2 from "../Images/slide-2.jpg";
import Slide3 from "../Images/slide-3.jpg";
import Mcdonald from "../Images/mcdonald-icon.png";
import MyReward from "../Images/my-reward.png";
import MyMovie from "../Images/movie-club (2).png";
import card1 from "../Images/card1.png";
import card2 from "../Images/card-2.png";
import card3 from "../Images/card-3.png";
import bigmac from "../Images/big-mac (2).png";
import panas from "../Images/panas.png";
import mcchicken from "../Images/mc-chicken.png";
import child from "../Images/child.png";
import apk from "../Images/apk.png";
import end from "../Images/end.png";
import hubkami from "../Images/hub-kami.png";
import { Link } from "react-router-dom";

function Home(props) {
  // State to manage promotions
  const [promotions, setPromotions] = useState([
    {
      title: "Buat kejutan perayaan spesial dengan cheesburger tower",
      description:
        "Pilihan unik untuk merayakan ulang tahun atau momen special lainnya",
      validity: "Berlaku hingga kiamat",
      image: card1,
    },
    {
      title: "Promo menarik Mekdi X Voltron",
      description: "Charge Mobil dapat promo menarik dari mekdi!",
      validity: "Berlaku hingga hari kiamat",
      image: card2,
    },
    {
      title: "Promo kartu kredit bank BCA",
      description: "Ikutin terus event yang kami berikan yaa",
      validity: "Berlaku hingga hari kiamat",
      image: card3,
    },
  ]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Mcdonald}
              style={{ width: "50px", height: "50px", marginLeft: "30%" }}
              alt="McDonald's Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-medium text-black"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ lineHeight: "50px" }}
                >
                  Menu
                </a>
                <ul className="dropdown-menu" style={{ width: "350px" }}>
                  <div className="row">
                    <div className="col-6">
                      <li>
                        <a className="dropdown-item" href="#">
                          Sarapan pagi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Daging sapi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ayam
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ikan
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Minuman
                        </a>
                      </li>
                      <li>
                        <Link to="/Menu" className="dropdown-item">
                          <p className="fw-bolder text-warning">
                            Lihat semua Menu
                          </p>
                        </Link>
                      </li>
                    </div>
                    <div className="col-6">
                      <li>
                        <a className="dropdown-item" href="#">
                          Makanan penutup
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Happy meal
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Paket keluarga
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mc cafe
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cemilan
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li
                className="nav-item fw-medium text-bg-black"
                style={{ marginTop: "12px" }}
              >
                <Link to="/Promo" className="nav-link">
                  Promo
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  <img
                    src={MyReward}
                    style={{ width: "100px", height: "50px" }}
                    alt="My Reward"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  <img
                    src={MyMovie}
                    style={{ height: "50px", width: "100px" }}
                    alt="My Movie"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled fw-medium text-black"
                  aria-disabled="true"
                  style={{ lineHeight: "50px" }}
                >
                  Dunia anak
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled fw-medium text-black"
                  aria-disabled="true"
                  style={{ lineHeight: "50px" }}
                >
                  Berita terkini
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled text-black fw-medium"
                  aria-disabled="true"
                >
                  Pahlawan di <br />
                  sekitar kita
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Makin kenal <br />
                  Makin sayang
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Produk kami
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Restoran kami
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Komitmen dan tanggung jawab kami
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mx-auto mt-2 text" role="search">
              <FaMapLocationDot className="mt-1 h3" />
              <a
                href="#"
                className="ms-3 text-decoration-none text-black"
                style={{ fontSize: "20px" }}
              >
                Lokasi
              </a>
            </form>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* menu */}
      <div class="container-fluid my-5" data-aos="fade-up">
        <h1 className="text-center fw-bolder mb-5">Promo menarik</h1>
        <div class="card-group">
          {promotions.map((promotion, index) => (
            <div class="card" key={index}>
              <img src={promotion.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bolder">{promotion.title}</h5>
                <p className="card-text">{promotion.description}</p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    {promotion.validity}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = "./Promo")}
          style={{
            backgroundColor: "red",
            padding: "20px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            justifyItems: "center",
            alignItems: "center",
            display: "flex",
            margin: "8% auto",
            borderRadius: "5px",
            boxShadow: "2px 1px 1px grey",
          }}
        >
          Lihat semua promo
        </button>
        <h1 className="text-center fw-bold mb-5 mt-5" data-aos="fade-up">
          Menu Favorit
        </h1>
        <div
          className=" row row-cols-1 row-cols-md-4 g-2 m-auto"
          data-aos="fase-up"
        >
          <div className="col d-flex" data-aos="fade-up">
            <div className="card flex-fill">
              <img src={bigmac} className="card-img-top" alt="Bigmac" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold">Bigmac</h5>
              </div>
            </div>
          </div>
          <div className="col d-flex" data-aos="fade-up">
            <div className="card flex-fill">
              <img src={panas} className="card-img-top" alt="Panas 1" />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title text-center fw-bold"
                  style={{ lineHeight: "135px" }}
                >
                  Panas 1
                </h5>
              </div>
            </div>
          </div>
          <div className="col d-flex" data-aos="fade-up">
            <div className="card flex-fill">
              <img src={panas} className="card-img-top" alt="Panas 2" />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title text-center fw-bold"
                  style={{ lineHeight: "135px" }}
                >
                  Panas 2
                </h5>
              </div>
            </div>
          </div>
          <div className="col d-flex" data-aos="fade-up">
            <div className="card flex-fill">
              <img src={mcchicken} className="card-img-top" alt="Mc Chicken" />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title text-center fw-bold "
                  style={{ lineHeight: "150px" }}
                >
                  Mc Chicken
                </h5>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => (window.location.href = "/menu")}
          style={{
            backgroundColor: "red",
            padding: "20px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            justifyItems: "center",
            alignItems: "center",
            display: "flex",
            margin: "8% auto",
            borderRadius: "5px",
            boxShadow: "2px 1px 1px grey",
          }}
          data-aos="fade-up"
        >
          Lihat semua menu
        </button>
        <div class="card mb-3 bg-warning">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={child} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body my-5" style={{ marginLeft: "25%" }}>
                <h3 class="card-title fw-bolder">
                  Ciptakan momen bahagia untuk si kecil
                </h3>
                <p class="card-text my-4">
                  Semua hal seru hanya ada di Dunia anak McDonald's
                  <br />
                  <button
                    style={{
                      backgroundColor: "red",
                      padding: "20px",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      justifyItems: "center",
                      alignItems: "center",
                      display: "flex",
                      margin: "10% 0.5%",
                      borderRadius: "5px",
                      boxShadow: "2px 1px 1px grey",
                    }}
                  >
                    pelajari selengkapnya
                  </button>
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 bg-light">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body my-5" style={{ marginLeft: "5%" }}>
                <h3 class="card-title fw-bolder">
                  Makin hemat & praktis <br />
                  dengan aplikasi McDonald's. <br />
                  Download sekarang
                </h3>
                <p class="card-text my-4">
                  Semua hal seru hanya ada di Dunia anak McDonald's
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "left",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      boxShadow: "2px 1px 1px grey",
                      cursor: "pointer",
                    }}
                  >
                    <FaApple size={30} style={{ marginRight: "10px" }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "14px",
                        }}
                      >
                        Download on the
                      </span>
                      <span style={{ fontSize: "18px" }}>App Store</span>
                    </div>
                  </button>

                  <button
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      boxShadow: "2px 1px 1px grey",
                      cursor: "pointer",
                    }}
                  >
                    <FaApple size={30} style={{ marginRight: "10px" }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "14px",
                        }}
                      >
                        Download on the
                      </span>
                      <span style={{ fontSize: "18px" }}>App Store</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img src={apk} class="img-fluid rounded-start" alt="..." />
            </div>
            <div className="bg-dark">
              <div className="p-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
                <h1 className="text-white text-center text-md-start mb-4 mb-md-0">
                  Instagram McDonald's Indonesia
                </h1>

                <button
                  className="btn btn-danger btn -lg shadow"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    boxShadow: "2px 1px 1px grey",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://www.instagram.com/code.techid/"
                    className="text-decoration-none text-white"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Ikuti @code.techid
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card mb-3 bg-warning mt-0 pt-0 my-0"
          style={{ marginBottom: "0" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={end}
                class="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: "0px", marginTop: "40px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body my-0" style={{ marginLeft: "5%" }}>
                <h3 class="card-title fw-bolder">
                  Ayo kita saling belajar dan <br />
                  sharing di sini yaa!
                </h3>
                <p class="card-text my-4">
                  Di McDonald's kami lebih dari sekedar bisnis,kami adalah
                  komunitas tampat anda berlatih ketrampilan hidup dan sebagai
                  wadah untuk mengejar serta mewujudkan impianmu
                  <br />
                  <button
                    style={{
                      backgroundColor: "red",
                      padding: "20px",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      justifyItems: "center",
                      alignItems: "center",
                      display: "flex",
                      margin: "10% 0.5%",
                      borderRadius: "5px",
                      boxShadow: "2px 1px 1px grey",
                    }}
                  >
                    Lihat lowongan
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-black my-3">
          <div className="container">
            <div className="row my-3">
              <div className="col-md-4">
                {" "}
                {/* Kolom pertama */}
                <h2 className="fw-bolder">McDonald</h2>
                <br />
                <span>Hubungi kami</span>
                <br />
                <span>Tentang kami</span>
                <br />
                <span>Newsroom</span>
                <br />
                <span>Karir</span>
              </div>
              <div className="col-md-4">
                {" "}
                {/* Kolom kedua */}
                <h2 className="fw-bolder">Layanan</h2>
                <br />
                <span>Sertifikasi dan jaminan kualitas</span>
                <br />
                <span>CSR</span>
                <br />
                <span>Aplikasi McDonald's</span>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bolder">Hubungi kami</h2>
                <br />
                <img src={hubkami} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
