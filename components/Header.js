/* eslint-disable */
import Link from "next/link";
import { pathBackend } from "../lib/path";
import { ReactSVG } from "react-svg";
export default function Header(props) {
  return (
    <>
      <div className="book">
        <Link href="https://backend.anticaosterialucca.it/menu-ristorante/">
          <a dangerouslySetInnerHTML={{ __html: "MENU'" }}></a>
        </Link>
      </div>
      <div className="logo">
        <Link href="/">
          <a>
            <img
              src={`${pathBackend}/wp-content/themes/wordpressify/img/logo.png`}
            />
          </a>
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
              <Link href="/i-piatti">
                <a>I PIATTI</a>
              </Link>
            </li>
            <li>
              <Link href="/il-ristorante">
                <a href="/il-ristorante">IL RISTORANTE</a>
              </Link>
            </li>

            <li>
              <Link href="/i-contatti">
                <a href="/i-contatti">I CONTATTI</a>
              </Link>
            </li>
            <li className="style__inline">
              <Link href="https://www.instagram.com/anticaosterialucca/">
                <a>
                  <ReactSVG
                    className="link__instagram"
                    src="img/instagram.svg"
                  />
                </a>
              </Link>
              <Link href="https://www.facebook.com/anticaosterialucca">
                <a>
                  <ReactSVG className="link__facebook" src="img/facebook.svg" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
