import Discover from "./pages/Discover";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { activeSong } = useSelector((state) => state.player);
  console.log(activeSong);
  return (
    <Router>
      <div className="App">
        <SideBar />
        {activeSong?.title && <MusicPlayer />}
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route exact path="/top-artists" component={Discover} />
          <Route exact path="/around-you" component={Discover} />
          <Route exact path="/top-charts" component={Discover} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
