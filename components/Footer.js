import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="partners__brand">
        <Link href="https://www.varronepiu.it/">
          <a>
            <img src="img/logo_varrone_piu.png" alt="" />
          </a>
        </Link>
        <Link href="https://varronepizza.it/">
          <a>
            <img src="img/logo_varrone_pizza.png" alt="" />
          </a>
        </Link>
        <Link href="https://grigliavarrone.com/">
          <a>
            <img src="img/logo_griglia_di_varrone.svg" alt="" />
          </a>
        </Link>
      </div>
    </footer>
  );
}
