import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Mcdonald from "../Images/mcdonald-icon.png";
import MyReward from "../Images/my-reward.png";
import MyMovie from "../Images/movie-club (2).png";
import promo1 from "../Images/promo-img-1.jpg";
import promo2 from "../Images/promo-2.jpg";
import promo3 from "../Images/promo-3.jpg";
import "./Promo.css";

function Promo() {
  const [activePromo, setActivePromo] = useState("semua");

  const renderPromoContent = () => {
    const promoCards = [
      {
        img: promo1,
        title: "Promo Makan Siang",
        text: "Nikmati paket makan siang dengan harga spesial hanya di McDonald's.",
        date: "Berlaku hingga 30 Oktober 2024",
      },
      {
        img: promo2,
        title: "Promo Drive Thru",
        text: "Dapatkan McFloat gratis untuk setiap pembelian melalui Drive Thru.",
        date: "Berlaku hingga 31 Desember 2024",
      },
      {
        img: promo3,
        title: "Promo Sarapan",
        text: "Beli 1 McMuffin, dapatkan gratis 1 kopi panas hanya untuk sarapan.",
        date: "Berlaku hingga 15 November 2024",
      },
    ];

    const layouts = {
      semua: [
        promoCards[0],
        promoCards[1],
        promoCards[2],
        promoCards[0],
        promoCards[1],
        promoCards[2],
        promoCards[0],
        promoCards[1],
        promoCards[2],
      ],
      kegiatan: [promoCards[1], promoCards[2], promoCards[0], promoCards[1]],
      menu: [promoCards[2], promoCards[0], promoCards[1], promoCards[2]],
      cashless: [
        promoCards[0],
        promoCards[2],
        promoCards[1],
        promoCards[1],
        promoCards[2],
      ],
    };

    const currentLayout = layouts[activePromo];

    return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {currentLayout.map((promo, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={promo.img} className="card-img-top" alt={promo.title} />
              <div className="card-body">
                <h5 className="card-title">{promo.title}</h5>
                <p className="card-text">{promo.text}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{promo.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto">
        <div className="container-fluid">
          <Link to="/">
            <img
              src={Mcdonald}
              alt="McDonald's Logo"
              style={{ width: "50px", height: "50px", marginLeft: "80px" }}
            />
          </Link>
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
              <li className="nav-item fw-medium text-bg-black">
                <a className="nav-link" href="#" style={{ lineHeight: "50px" }}>
                  Promo
                </a>
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
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={promo1} className="d-block w-100" alt="Promo 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Promo 1</h5>
              <p>Deskripsi promo 1.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={promo2} className="d-block w-100" alt="Promo 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Promo 2</h5>
              <p>Deskripsi promo 2.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={promo3} className="d-block w-100" alt="Promo 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Promo 3</h5>
              <p>Deskripsi promo 3.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="btn-group button-group w-auto gap-3 mt-5"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className={`btn btn-custom text-white fw-bold ${
              activePromo === "semua" ? "active" : ""
            }`}
            onClick={() => setActivePromo("semua")}
          >
            Semua Promo
          </button>
          <button
            type="button"
            className={`btn btn-custom text-white fw-bold ${
              activePromo === "kegiatan" ? "active" : ""
            }`}
            onClick={() => setActivePromo("kegiatan")}
          >
            Promo Kegiatan
          </button>
          <button
            type="button"
            className={`btn btn-custom text-white fw-bold ${
              activePromo === "menu" ? "active" : ""
            }`}
            onClick={() => setActivePromo("menu")}
          >
            Promo Menu
          </button>
          <button
            type="button"
            className={`btn btn-custom text-white fw-bold  ${
              activePromo === "cashless" ? "active" : ""
            }`}
            onClick={() => setActivePromo("cashless")}
          >
            Promo Cashless
          </button>
        </div>
      </div>

      {renderPromoContent()}
    </>
  );
}

export default Promo;
