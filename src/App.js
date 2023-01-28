import Discover from "./pages/Discover";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import { AiFillEdit } from "react-icons/ai";

function App() {
  const { activeSong } = useSelector((state) => state.player);
  console.log(activeSong);
  return (
    <div className="App">
      <SideBar />
      <Discover />
      {activeSong?.title && <MusicPlayer />}
    </div>
  );
}

export default App;
