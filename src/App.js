import data from "./mockData.json";
import { Switch, Route, useLocation } from "react-router";
import Screen from "./Screen";
import { AnimatePresence } from "framer-motion";

const screens = data[0].screens;

export default function Home() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/screens/:id">
          <Screen screens={screens} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
