import './App.css';
import Header from "./components/Header";
import ImageCube from './components/ImageCube.js'
import SideSelector from "./components/SideSelector";
// import Images from "./components/Images";

function App() {
  return (
    <div>
      <Header />
      <ImageCube />
      <SideSelector />
    </div>
  );
}

export default App;
