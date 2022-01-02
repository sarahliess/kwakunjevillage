import "./App.css";
import "./Resetter.css";
import Navbar from "./components/Navbar";
import Header from "./components/Home/Header";
import RoomPreview from "./components/Home/RoomPreview";
import About from "./components/Home/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RoomPreview />
      <About />
    </div>
  );
}

export default App;
