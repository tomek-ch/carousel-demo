import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Screen({ screens }) {
  const { id } = useParams();
  const currentId = Number(id);

  const currentScreen = screens[currentId - 1];
  if (!currentScreen) {
    return <h1>Not found</h1>;
  }

  const prevScreen = screens[currentId - 2];
  const nextScreen = screens[currentId];

  const isNav = currentScreen?.type === "Screen 2";
  const isNavNext = nextScreen?.type === "Screen 2";

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className={isNav ? "box nav-box" : "box"}
    >
      {prevScreen && !isNav && (
        <Link to={`/screens/${currentId - 1}`} className="left">
          ←
        </Link>
      )}
      <h1>
        {currentId}: {currentScreen[currentId]}
      </h1>
      {nextScreen && !isNav && !isNavNext && (
        <Link to={`/screens/${currentId + 1}`} className="right">
          →
        </Link>
      )}
      {currentId === 1 && (
        <Link to={`/screens/${screens.length}`} className="bottom">
          ↓
        </Link>
      )}
      {isNav && (
        <ul>
          {currentScreen.links.map((link) => (
            <li key={link}>
              <Link to={`/screens/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default Screen;
