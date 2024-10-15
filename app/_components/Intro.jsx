import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/mask.module.scss";
import useMousePosition from "@/utils/mouse-position";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="h-screen overflow-hidden">
      <div className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Not just a developer, but a problem-solver. Expect results, not
            excuses. Delivering pixel-perfect frontend solutions that don{"'"}t
            break the bank (and a good dose of humor too)
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            I{"'"}m a <span>results-driven developer</span> who thrives in
            dynamic environments, embraces challenges, and continuously seeks
            opportunities for professional growth.
          </p>
        </div>
      </div>
    </div>
  );
}
