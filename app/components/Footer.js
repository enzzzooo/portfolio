import s from "./Footer.module.css";
import Link from "next/link";
import Star from "./Star";
export default function Footer() {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.big}>Main</h1>
        <h2 className={s.big}>Rarw</h2>
        <ul>
          <li>
            <Link className={s.small} href="../portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={s.small} href="../about">
              About
            </Link>
          </li>
          <li className={`${s.lower} ${s.small}`}>Copyright &copy; 2023</li>
        </ul>
      </div>
      <Star />
    </>
  );
}
