import s from "./page.module.css";
import { gt_america } from "./lib/font";
import Image from "next/image";
import car from "../public/car.jpeg";
export default function page() {
  // page is descriptive to programmer; can also be page or another word
  return (
    <>
      <section className={s.section1}>
        <div className={s.TitleWrapper}>
          <div className={`${gt_america.className} ${s.wrapperTitle}`}>
            <h1 className={s.h1Title}>Website</h1>
            <h2 className={s.h2Title}>My website is grand</h2>
          </div>
          <div className={s.imageWrapper}>
            <Image className={s.imageMain} src={car} alt={" "} priority></Image>
            <Image className={s.imageZoom} src={car} alt={" "} priority></Image>
          </div>
        </div>
      </section>
      <section className={s.section2}></section>
    </>
  );
}
