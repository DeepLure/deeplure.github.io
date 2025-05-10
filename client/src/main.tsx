import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/text-color.css"; // Import additional styles for text color consistency

createRoot(document.getElementById("root")!).render(<App />);
