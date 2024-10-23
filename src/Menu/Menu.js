import React from "react";
import styles from "./Menu.module.css";
import { FaMapLocationDot } from "react-icons/fa6";
import Mcdonald from "../Images/mcdonald.png";
import MyReward from "../Images/my-reward.png";
import MyMovie from "../Images/movie-club (2).png";
import { Link } from "react-router-dom";
import Carousel1 from "../Images/carousel-1.png";
import Carousel2 from "../Images/carousel-2.png";
import Carousel3 from "../Images/carousel-3.png";
import menu1 from "../Images/menu-1.png";
import menu2 from "../Images/menu-2.png";
import menu3 from "../Images/menu-3.png";
import menu4 from "../Images/menu-4.png";
import menu5 from "../Images/menu-5.png";
import menu6 from "../Images/menu-6.png";
import menu7 from "../Images/menu-7.png";
import menu8 from "../Images/menu8.png";
import menu9 from "../Images/menu-9.png";
import menu10 from "../Images/menu-10.png";
import menu11 from "../Images/menu-11.png";
import menu12 from "../Images/menu-12.png";
import menu13 from "../Images/menu-13.png";
import menu14 from "../Images/menu-14.png";
import menu15 from "../Images/menu-15.png";
import menu16 from "../Images/menu-16.png";
import menu20 from "../Images/menu-20.png";
import menu21 from "../Images/menu-21.png";
import menu22 from "../Images/menu-22.png";
import menu23 from "../Images/menu-23.png";
import menu24 from "../Images/menu-24.png";
import menu25 from "../Images/menu-25.png";
import menu26 from "../Images/menu-26.png";
import menu27 from "../Images/menu-27.png";

function Menu() {
  return (
    <div className={styles.container}>
      <nav
        className={`navbar navbar-expand-lg bg-white shadow-sm ${styles.navbar}`}
      >
        <div className="container-fluid">
          <Link to="/">
            <img
              src={Mcdonald}
              className={`${styles.logo} img-fluid ms-5`}
              alt="McDonald's Logo"
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item dropdown ${styles.dropdown} `}
                style={{ marginTop: "13px" }}
              >
                <a
                  className={`nav-link dropdown-toggle fw-medium text-dark ${styles.menuLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ display: "inline-block" }}
                >
                  Menu
                </a>
                <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
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
                        <a
                          className="dropdown-item fw-bolder text-warning"
                          href="#"
                        >
                          Lihat semua menu
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item fw-medium">
                <a className="nav-link" href="#" style={{ lineHeight: "50px" }}>
                  Promo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  <img
                    src={MyReward}
                    className="img-fluid"
                    style={{
                      width: "100px",
                      height: "50px",
                    }}
                    alt="My Reward"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  <img
                    src={MyMovie}
                    className="img-fluid"
                    style={{
                      height: "50px",
                      width: "100px",
                    }}
                    alt="My Movie"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled fw-medium text-dark"
                  aria-disabled="true"
                  style={{ lineHeight: "50px" }}
                >
                  Dunia anak
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled fw-medium text-dark"
                  aria-disabled="true"
                  style={{ lineHeight: "50px" }}
                >
                  Berita terkini
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled text-dark fw-medium"
                  aria-disabled="true"
                >
                  Pahlawan di <br />
                  sekitar kita
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false "
                  style={{ lineHeight: "50px" }}
                >
                  Tentang kami
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Misi dan visi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kontak kami
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className={`d-flex mx-auto mt-2 ${styles.searchForm}`}
              role="search"
            >
              <FaMapLocationDot className="mt-1 h3" />
              <a
                href="#"
                className={`ms-3 text-decoration-none text-dark ${styles.locationLink}`}
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
            <img
              src={Carousel1}
              className="d-block w-100 h-auto"
              data-bs-interval="1000"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Carousel2}
              className="d-block w-100 mt-2"
              data-bs-interval="1000"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Carousel3}
              className="d-block w-100 mt-2"
              data-bs-interval="1000"
              alt="..."
            />
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Sarapan Pagi</h1>
      <div className={`row row-cols-1 row-cols-md-4 g-10 ${styles.menuRow}`}>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu1}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Egg & Chesee Muffin
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu2}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Chicken muffin
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu3}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Sausage Mcmuffin
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu4}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Egg McMuffin</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu5}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Chicken muffin with egg
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu6}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Sausage mc muffin with egg
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu7}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Sausage wrap</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu8}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Big breakfast
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Ayam</h1>
      <div className={`row row-cols-1 row-cols-md-4 g-10 ${styles.menuRow}`}>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu9}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Egg & Chesee Muffin
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu10}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Paket hebat - korean soy <br />
                Garlic Wings
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu11}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Mcspicy</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu12}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Chicken snack wrap
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu13}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Spicy chicke bites
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu14}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                PaNas Spesial
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu15}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Paket spesial
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu16}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Big Chicken burger
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Minuman</h1>
      <div className={`row row-cols-1 row-cols-md-4 g-10 ${styles.menuRow}`}>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu20}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Fruit Tea Lemon
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu21}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Coca Cola</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu22}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Sprite</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu23}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Fanta</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu24}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Fruit Tea Coco pandan
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu25}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Coca Cola McFloat
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Happy Meal</h1>
      <div className={`row row-cols-1 row-cols-md-4 g-10 ${styles.menuRow}`}>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu9}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Egg & Chesee Muffin
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu10}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Paket hebat - korean soy <br />
                Garlic Wings
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu11}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>Mcspicy</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <img
              src={menu12}
              className={`card-img-top ${styles.cardImage}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                Chicken snack wrap
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
