import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DetailSection from "./DetailSection";

const root = createRoot(document.getElementById('root'))
root.render(
  <> 
    <Navbar />
    <HeroSection />
    <DetailSection />
  </>
)

