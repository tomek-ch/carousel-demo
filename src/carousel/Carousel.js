import { useEffect, useState } from "react";
import styles, { container, child, wrapper } from "./Carousel.module.css";

function Carousel({ children, animation }) {
  const [childrenArr, setChildren] = useState([null, children]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (childrenArr[1] !== children) {
      setChildren((prev) => [prev[1], children]);
      setIsTransitioning(true);
    }
  }, [childrenArr, children]);

  if (isTransitioning) {
    return (
      <div className={wrapper}>
        <div
          className={`${container} ${styles[animation]}`}
          onAnimationEnd={() => setIsTransitioning(false)}
        >
          <div className={child}>{childrenArr[0]}</div>
          <div className={child}>{childrenArr[1]}</div>
        </div>
      </div>
    );
  }

  return childrenArr[1];
}

export default Carousel;
