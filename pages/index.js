/* eslint-disable */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="grid__container__home">
          <Header />

          <div className="cibo item__menu__home">
            <Link href="/il-cibo">
              <a>
                <div className="black__box">
                  <img src="https://backend.anticaosterialucca.it/wp-content/themes/wordpressify/img/cibo.png" />
                  <span>IL CIBO</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="vino item__menu__home">
            <Link href="/il-vino">
              <a>
                <div className="black__box">
                  <img src="https://backend.anticaosterialucca.it/wp-content/themes/wordpressify/img/vino.png" />
                  <span>IL VINO</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="contatti item__menu__home">
            <Link href="/i-contatti">
              <a>
                <div className="black__box">
                  <img src="https://backend.anticaosterialucca.it/wp-content/themes/wordpressify/img/contatti.png" />
                  <span>I CONTATTI</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
