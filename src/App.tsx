import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./scene/Home";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Home />
      </div>
    </ParallaxProvider>
  );
}

export default App;
