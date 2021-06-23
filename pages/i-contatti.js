/* eslint-disable */
import "../styles/Page.module.scss";
import Header from "../components/Header";
import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { pathBackend } from "../lib/path";
export default function Contatti(props) {
  const background = useRef();
  const bgImages = [
    "img/un-bel-profitterol--scaled.jpg",
    "img/tiramisù-ai-pistacchi-scaled.jpg",
    "img/tempura-di-naselli-Gazpacho-scaled.jpg",
    "img/tarte-de-citron-scaled.jpg",
    "img/tagliolino-ragù-bianco-di-maiale-nero-scaled.jpg",
  ];

  useEffect(() => {
    background.current.classList.add("active");
    return () => {};
  });

  return (
    <>
      <div className="page-template-default">
        <div className="grid__container__page">
          <Header />
          <div className="content">
            <div className="text-wrapper">
              <div className="text">
                <div id="title">
                  <h4>CONTATTI</h4>
                </div>
                <div id="description-contatti">
                  <p className="text-contatti">
                    Via Santa Croce 55, 55100 Lucca (LU)
                  </p>
                  <p className="text-contatti">Tel. +39 0583 995678</p>
                  <p className="text-contatti">
                    Mail. info@anticaosterialucca.it
                  </p>
                </div>
              </div>
            </div>
            <div className="glide">
              <div className="glide_cover"></div>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src={`${pathBackend}/wp-content/uploads/2021/06/un-bel-profitterol--scaled.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src={`${pathBackend}/wp-content/uploads/2021/06/tiramisù-ai-pistacchi-scaled.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src={`${pathBackend}/wp-content/uploads/2021/06/tempura-di-naselli-Gazpacho-scaled.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src={`${pathBackend}/wp-content/uploads/2021/06/tarte-de-citron-scaled.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src={`${pathBackend}/wp-content/uploads/2021/06/tagliolino-ragù-bianco-di-maiale-nero-scaled.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="background">
            <img ref={background} src={bgImages[0]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
