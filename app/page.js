import s from "./page.module.css";
import { gt_america } from "./lib/font";
import Star from "./components/Star";
import Image from "next/image";
import car from "../public/car.jpeg";
export default function Home() {
  // home is descriptive to programmer; can also be page or another word
  return (
    <main>
      <section className={s.section1}>
        <div className={`${gt_america.className} ${s.textWrapper}`}>
          <h1 className={s.h1Title}>Website</h1>
          <h2 className={s.h2Title}>My website is grand</h2>
        </div>
        <div className={s.imageWrapper}>
          <Image className={s.imageTitle} src={car} priority></Image>
        </div>
      </section>
      <section className={s.section2}>
        <div>hi</div>
        <Star></Star>
      </section>
    </main>
  );
}
