import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";

const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

function Index() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skill" component={About} />
      <Route path="/resume" component={About} />
      <Route path="/portfolio" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Index;
