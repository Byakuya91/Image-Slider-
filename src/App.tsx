// ? COMPONENT IMPORTS
import { ImageSlider } from "./ImageSlider";

// ? IMG IMPORTS
import recipe1 from "./img/baked-mac.jpg";
import recipe2 from "./img/Burger.jpg";
import recipe3 from "./img/Caesar-Salad.jpg";
import recipe4 from "./img/Chicken-Parm.jpg";
import recipe5 from "./img/chocolate-pudding.jpg";
import mikasa from "./img/Mikasa.jpg";
import raven1 from "./img/Raven TT.jpg";
import raven2 from "./img/Raven TT2.jpg";
import sakura from "./img/Sakura Naruto.jpg";
import winry_and_ed from "./img/FMA ed and Winry.jpg";

// STEP ONE: Put all relevant images inside an array
// ? These images are just strings that give the src image URL.
// const IMAGES = [mikasa, raven1, sakura, raven2, winry_and_ed];
const IMAGES = [recipe1, recipe2, recipe3, recipe4, recipe5];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 5",
        height: "100%",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <ImageSlider imageURLs={IMAGES} />
    </div>
  );
}

export default App;
