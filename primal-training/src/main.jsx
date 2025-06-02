import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

const root = createRoot(document.getElementById('root'))
root.render(
  <> 
    <Navbar />
    <h1>Welcome</h1>
  </>
)

