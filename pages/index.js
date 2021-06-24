/* eslint-disable */
import Link from "next/link";
import Footer from "../components/Footer";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import Header from "../components/Header";
import { pathBackend } from "../lib/path";
import "../styles/Home.module.scss";

export default function Home({ photos }) {
  const radialGradient =
    "radial-gradient(rgba(64, 37, 0, 0.78), rgba(13, 7, 0, 0.78))";

  const randomNumber = Math.floor(Math.random() * 5);
  const bgImages = [];

  photos.galleriePagineNext.gallery &&
    photos.galleriePagineNext.gallery.forEach((element) =>
      bgImages.push(element.image.sourceUrl)
    );
  return (
    <>
      <div
        className="home"
        style={{
          background: `${radialGradient}, url(${bgImages[randomNumber]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid__container__home">
          <Header />

          <div className="cibo item__menu__home">
            <Link href="/i-piatti">
              <a>
                <div className="black__box">
                  <img
                    src={`${pathBackend}/wp-content/themes/wordpressify/img/cibo.png`}
                  />
                  <span>I PIATTI</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="vino item__menu__home">
            <Link href="/il-ristorante">
              <a>
                <div className="black__box">
                  <img
                    src={`${pathBackend}/wp-content/themes/wordpressify/img/lucca.png`}
                  />
                  <span>IL RISTORANTE</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="contatti item__menu__home">
            <Link href="/i-contatti">
              <a>
                <div className="black__box">
                  <img
                    src={`${pathBackend}/wp-content/themes/wordpressify/img/contatti.png`}
                  />
                  <span>I CONTATTI</span>
                </div>
              </a>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        page(id: 6, idType: DATABASE_ID) {
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
