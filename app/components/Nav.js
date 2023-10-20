import Link from "next/link";
import s from "./Nav.module.css";

export default function Header() {
  // css classnames are CaSeSeNsItIvE
  return (
    <header className={s.center}>
      <div className={s.header}>
        <Link className={s.logo} href="/">
          My Website
        </Link>
        <ul className={s.menu}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
