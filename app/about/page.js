import { gt_america } from "../lib/font";
import s from "./page.module.css";
export default function about() {
  return (
    <div className={s.section1}>
      <div className={`${gt_america.className} ${s.textWrapper}`}>
        <h1 className={s.h1Title}>About Me</h1>
        <h2 className={s.h2Title}>LowerH2</h2>
        {/* hover over, magnifying glass under cursor */}
        {/* clip background to a div that is rounded and that is centered to the position of users cursor */}
      </div>
    </div>
  );
}
