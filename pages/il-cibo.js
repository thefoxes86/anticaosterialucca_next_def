/* eslint-disable */
import "../styles/Page.module.scss";
import Header from "../components/Header";
import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { pathBackend } from "../lib/path";
import { data } from "autoprefixer";

export default function Cibo({ photos }) {
  const background = useRef();
  const indexEl = useRef(0);
  let titleDisplacement = 0;
  let descriptionDicplacement = 0;
  const heightWrapperTitle = {
    h4: 180,
    p: 55,
  };

  const showTextAnimation = (direction) => {
    if (titleDisplacement === 0 && direction === "prev") {
      titleDisplacement =
        -(photos.galleriePagineNext.gallery.length - 1) * heightWrapperTitle.h4;
    } else if (
      titleDisplacement ===
        -(photos.galleriePagineNext.gallery.length - 1) *
          heightWrapperTitle.h4 &&
      direction === "next"
    ) {
      titleDisplacement = 0;
    } else {
      titleDisplacement =
        direction === "next"
          ? titleDisplacement - heightWrapperTitle.h4
          : titleDisplacement + heightWrapperTitle.h4;
    }

    if (descriptionDicplacement === 0 && direction === "prev") {
      descriptionDicplacement =
        -(photos.galleriePagineNext.gallery.length - 1) * heightWrapperTitle.p;
    } else if (
      descriptionDicplacement ===
        -(photos.galleriePagineNext.gallery.length - 1) *
          heightWrapperTitle.p &&
      direction === "next"
    ) {
      descriptionDicplacement = 0;
    } else {
      descriptionDicplacement =
        direction === "next"
          ? descriptionDicplacement - heightWrapperTitle.p
          : descriptionDicplacement + heightWrapperTitle.p;
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

  const bgImages = [];

  photos.galleriePagineNext.gallery &&
    photos.galleriePagineNext.gallery.forEach((element) =>
      bgImages.push(element.image.sourceUrl)
    );

  const startNextDistortAnimation = () => {
    indexEl.current =
      indexEl.current > photos.galleriePagineNext.gallery.length - 2
        ? 0
        : indexEl.current + 1;

    gsap.to(background.current, {
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
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
    indexEl.current =
      indexEl.current <= 0
        ? photos.galleriePagineNext.gallery.length - 1
        : indexEl.current - 1;

    gsap.to(background.current, {
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
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
                  {photos.galleriePagineNext.gallery &&
                    photos.galleriePagineNext.gallery.map(({ name }) => (
                      <h4
                        key={name}
                        dangerouslySetInnerHTML={{ __html: name }}
                      ></h4>
                    ))}
                </div>
                <div id="description">
                  {photos.galleriePagineNext.gallery &&
                    photos.galleriePagineNext.gallery.map(({ description }) => (
                      <p
                        key={description}
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></p>
                    ))}
                </div>
              </div>
            </div>
            <div className="glide">
              <div className="glide_cover"></div>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {photos.galleriePagineNext.gallery &&
                    photos.galleriePagineNext.gallery.map(({ name, image }) => (
                      <li key={image.sourceUrl} className="glide__slide">
                        <div className="slide">
                          <div className="slider-image">
                            <img
                              src={image.sourceUrl}
                              srcSet={image.srcSet}
                              alt={name}
                              title={name}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        page(id: 8, idType: DATABASE_ID) {
          title(format: RENDERED)
          uri
          slug
          content(format: RENDERED)
          featuredImage {
            node {
              link
              srcSet(size: LARGE)
              title(format: RENDERED)
              uri
              sourceUrl(size: LARGE)
            }
          }
          galleriePagineNext {
            gallery {
              name
              description
              fieldGroupName
              image {
                sourceUrl(size: LARGE)
                srcSet(size: LARGE)
                title(format: RENDERED)
              }
            }
            fieldGroupName
          }
        }
      }
    `,
  });
  return {
    props: {
      photos: data.page,
    },
  };
}
