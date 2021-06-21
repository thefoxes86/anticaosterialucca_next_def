import Link from "next/link";
export default function Header(props) {
  return (
    <>
      <div className="book">
        <Link href="/prenota">
          <a>PRENOTA</a>
        </Link>
      </div>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="https://backend.anticaosterialucca.it/wp-content/themes/wordpressify/img/logo.png" />
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
    </>
  );
}
