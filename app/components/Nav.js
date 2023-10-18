import Link from "next/link";
import s from "./nav.module.css";

export default function Header() {
  return (
    <header className={s.header}>
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
    </header>
  );
}
