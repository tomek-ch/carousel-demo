import data from "./mockData.json";
import { Switch, Route } from "react-router";
import Screen from "./Screen";

const screens = data[0].screens;

export default function Home() {
  return (
    <Switch>
      <Route exact path="/screens/:id">
        <Screen screens={screens} />
      </Route>
    </Switch>
  );
}
