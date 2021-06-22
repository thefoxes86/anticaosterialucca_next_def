/* eslint-disable */
import "../styles/Page.module.scss";
import Header from "../components/Header";
import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
export default function Cibo({ photos }) {
  const background = useRef();
  const indexEl = useRef(0);
  let titleDisplacement = 0;
  let descriptionDicplacement = 0;

  const showTextAnimation = (direction) => {
    if (titleDisplacement === 0 && direction === "prev") {
      titleDisplacement = -540;
    } else if (titleDisplacement === -540 && direction === "next") {
      titleDisplacement = 0;
    } else {
      titleDisplacement =
        direction === "next"
          ? titleDisplacement - 180
          : titleDisplacement + 180;
    }

    if (descriptionDicplacement === 0 && direction === "prev") {
      descriptionDicplacement = -225;
    } else if (descriptionDicplacement === -225 && direction === "next") {
      descriptionDicplacement = 0;
    } else {
      descriptionDicplacement =
        direction === "next"
          ? descriptionDicplacement - 55
          : descriptionDicplacement + 55;
    }

    let title = [...document.querySelectorAll("#title h4")];

    title.forEach((title) => {
      gsap.to(title, {
        top: titleDisplacement + "px",
        duration: 1,
        ease: "power4.out",
      });
    });

    let description = [...document.querySelectorAll("#description p")];
    description.forEach((description) => {
      gsap.to(description, {
        top: descriptionDicplacement + "px",
        duration: 1.2,
        ease: "power4.out",
      });
    });
  };

  const bgImages = [
    "img/un-bel-profitterol--scaled.jpg",
    "img/tiramisù-ai-pistacchi-scaled.jpg",
    "img/tempura-di-naselli-Gazpacho-scaled.jpg",
    "img/tarte-de-citron-scaled.jpg",
    "img/tagliolino-ragù-bianco-di-maiale-nero-scaled.jpg",
  ];

  const startNextDistortAnimation = () => {
    indexEl.current = indexEl.current >= 4 ? 0 : indexEl.current + 1;

    gsap.to(background.current, {
      opacity: 0,
      ease: "power4.out",
      duration: 1.2,
      onComplete: () => {
        gsap.to(background.current, {
          opacity: 1,
          ease: "power4.out",
          duration: 0.8,
        });
        background.current.src = bgImages[indexEl.current];
      },
    });

    showTextAnimation("next");
  };
  const startPrevDistortAnimation = () => {
    indexEl.current = indexEl.current <= 0 ? 4 : indexEl.current - 1;

    gsap.to(background.current, {
      opacity: 0,
      ease: "power4.out",
      duration: 1.2,
      onComplete: () => {
        gsap.to(background.current, {
          opacity: 1,
          ease: "power4.out",
          duration: 0.8,
        });
        background.current.src = bgImages[indexEl.current];
      },
    });

    showTextAnimation("prev");
  };

  useEffect(() => {
    let glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 3,
      swipeThreshold: false,
      dragThreshold: false,
      breakpoints: {
        800: {
          perView: 2,
        },
      },
    }).mount();

    background.current.classList.add("active");

    console.log(glide.index);
    return () => {};
  }, []);
  return (
    <>
      <div className="page-template-default">
        <div className="grid__container__page">
          <Header />
          <div className="content">
            <div className="text-wrapper">
              <div className="text">
                <div id="title">
                  <h4>PRIMO</h4>
                  <h4>SECONDO</h4>
                  <h4>TERZO</h4>
                  <h4>QUARTO</h4>
                </div>
                <div id="description">
                  <p>Descrizione del piatto 1</p>
                  <p>Descrizione del piatto 2</p>
                  <p>Descrizione del piatto 3</p>
                  <p>Descrizione del piatto 4</p>
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
                          src="https://anticaosterialucca.it/wp-content/uploads/2021/06/un-bel-profitterol--scaled.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src="https://anticaosterialucca.it/wp-content/uploads/2021/06/tiramisù-ai-pistacchi-scaled.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src="https://anticaosterialucca.it/wp-content/uploads/2021/06/tempura-di-naselli-Gazpacho-scaled.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src="https://anticaosterialucca.it/wp-content/uploads/2021/06/tarte-de-citron-scaled.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="slide">
                      <div className="slider-image">
                        <img
                          src="https://anticaosterialucca.it/wp-content/uploads/2021/06/tagliolino-ragù-bianco-di-maiale-nero-scaled.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="glide__arrows" data-glide-el="controls">
                <button
                  className="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                  onClick={startPrevDistortAnimation}
                >
                  {"<"}
                </button>
                <button
                  className="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                  onClick={startNextDistortAnimation}
                >
                  {">"}
                </button>
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

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql``,
//   });
//   return {
//     props: {
//       photos: data.photos,
//     },
//   };
// }
