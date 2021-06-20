/* eslint-disable */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="grid__container__home">
          <div className="book">
            <Link href="/prenota">
              <a>PRENOTA</a>
            </Link>
          </div>
          <div className="logo">
            <Link href="/">
              <img
                src="https://anticaosterialucca.it/wp-content/themes/wordpressify/img/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="menu">
            <input type="checkbox" id="menu" />
            <label className="menu__container">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <div className="overlay_menu">
              <ul>
                <li>
                  <Link href="/il-cibo">
                    <a>IL CIBO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/il-vino">
                    <a href="/il-vino">IL VINO</a>
                  </Link>
                </li>

                <li>
                  <Link href="/i-contatti">
                    <a href="/i-contatti">I CONTATTI</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="cibo item__menu__home">
            <Link href="/il-cibo">
              <div className="black__box">
                <img
                  src="https://anticaosterialucca.it/wp-content/themes/wordpressify/img/cibo.png"
                  alt=""
                />
                <span>IL CIBO</span>
              </div>
            </Link>
          </div>
          <div className="vino item__menu__home">
            <Link href="/il-vino">
              <div className="black__box">
                <img
                  src="https://anticaosterialucca.it/wp-content/themes/wordpressify/img/vino.png"
                  alt=""
                />
                <span>IL VINO</span>
              </div>
            </Link>
          </div>
          <div className="contatti item__menu__home">
            <Link href="/i-contatti">
              <div className="black__box">
                <img
                  src="https://anticaosterialucca.it/wp-content/themes/wordpressify/img/contatti.png"
                  alt=""
                />
                <span>I CONTATTI</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
