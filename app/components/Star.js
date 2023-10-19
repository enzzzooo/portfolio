"use client";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import s from "./Star.module.css";
// check for typos, mishappens often and underlines it doesnt'
/**
 * A component that renders a starry background with interactive stars.
 * @param {Object} props - The component props.
 * @param {number} [props.densityRatio=0.5] - The ratio of stars to the viewport size.
 * @param {number} [props.sizeLimit=5] - The maximum size of a star.
 * @param {number} [props.defaultAlpha=0.2] - The default opacity of a star.
 * @param {number} [props.scaleLimit=2] - The maximum scale of a star.
 * @param {number} [props.proximityRatio=0.1] - The ratio of stars that are affected by pointer proximity.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Star({
  densityRatio = 0.5,
  sizeLimit = 5,
  defaultAlpha = 0.2,
  scaleLimit = 2,
  proximityRatio = 0.1,
}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const starsRef = useRef(null);
  const vminRef = useRef(null);
  const scaleMapperRef = useRef(null);
  const alphaMapperRef = useRef(null);

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext("2d");

    /**
     * Initializes the component.
     */
    const LOAD = () => {
      vminRef.current = Math.min(window.innerHeight, window.innerWidth);
      const STAR_COUNT = Math.floor(vminRef.current * densityRatio);
      scaleMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        scaleLimit,
        1
      );
      alphaMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        1,
        defaultAlpha
      );
      // Window size
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        x: gsap.utils.random(0, window.innerWidth, 1),
        y: gsap.utils.random(0, window.innerHeight, 1),
        size: gsap.utils.random(1, sizeLimit, 1),
        scale: 1,
        alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
      }));
    };

    /**
     * Renders the stars on the canvas.
     */
    const RENDER = () => {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      starsRef.current.forEach((star) => {
        contextRef.current.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
        contextRef.current.beginPath();
        contextRef.current.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
        contextRef.current.fill();
      });
    };

    /**
     * Updates the stars based on pointer proximity.
     * @param {Object} event - The pointermove event.
     * @param {number} event.x - The x-coordinate of the pointer.
     * @param {number} event.y - The y-coordinate of the pointer.
     */
    const UPDATE = ({ x, y }) => {
      starsRef.current.forEach((STAR) => {
        const DISTANCE = Math.sqrt(
          Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2)
        );
        gsap.to(STAR, {
          scale: scaleMapperRef.current(
            Math.min(DISTANCE, vminRef.current * proximityRatio)
          ),
          alpha: alphaMapperRef.current(
            Math.min(DISTANCE, vminRef.current * proximityRatio)
          ),
        });
      });
    };

    LOAD();
    gsap.ticker.fps(24);
    gsap.ticker.add(RENDER);

    // Event handling
    window.addEventListener("resize", LOAD);
    document.addEventListener("pointermove", UPDATE);

    return () => {
      window.removeEventListener("resize", LOAD);
      document.removeEventListener("pointermove", UPDATE);
      gsap.ticker.remove(RENDER);
    };
  }, []); // why brackets?

  return (
    <div>
      <canvas className="canvas" ref={canvasRef} />
    </div>
  );
}
