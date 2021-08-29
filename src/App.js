import data from "./mockData.json";
import { Switch, Route, useLocation } from "react-router";
import Screen from "./Screen";
import Carousel from "./carousel/Carousel";

const screens = data[0].screens;

export default function Home() {
  const location = useLocation();
  return (
    <Carousel animation={location.state?.dir}>
      <Switch location={location}>
        <Route exact path="/screens/:id">
          <Screen screens={screens} />
        </Route>
      </Switch>
    </Carousel>
  );
}
