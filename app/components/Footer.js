import s from "./Footer.module.css";
import Link from "next/link";
import Star from "./Star";
export default function Footer() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.main}>Main</h1>
      <h2>Rarw</h2>
      <ul>
        <li>
          <Link href="../portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="../about">About</Link>
        </li>
        <li>Copyright @ 2023</li>
      </ul>
    </div>
  );
}
