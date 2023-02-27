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
import TopPlay from "./components/TopPlay";
import SongDetail from "./pages/SongDetail";
import ArtistDetail from "./pages/ArtistDetail";
import AroundYou from "./pages/AroundYou";
import TopArtist from "./pages/TopArtist";
import TopCharts from "./pages/TopCharts";
import SearchBar from "./components/SearchBar";

function App() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <Router>
      <div className="App">
        <SideBar />
        <SearchBar />
        <TopPlay />
        {activeSong?.title && <MusicPlayer />}
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route exact path="/top-artists" component={TopArtist} />
          <Route path="/song/:songId" component={SongDetail} />
          <Route path="/artist/:artistId" component={ArtistDetail} />
          <Route exact path="/top-charts" component={TopCharts} />
          <Route exact path="/around-you" component={AroundYou} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
