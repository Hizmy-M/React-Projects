import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DetailSection from "./DetailSection";
import CommunitySection from "./CommunitySection";
import BookingSection from "./BookingSection";

const root = createRoot(document.getElementById('root'))
root.render(
  <> 
    <Navbar />
    <HeroSection />
    <DetailSection />
    <CommunitySection />
    <BookingSection />
  </>
)

