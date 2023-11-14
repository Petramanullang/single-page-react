import "./index.css";
import Navbar from "./assets/Navbar/Navbar";
import Heroes from "./assets/Heroes/Heroes";
import Content from "./assets/Contents/Content";
import Footer from "./assets/Footer/Footer";
import Description from "./assets/Contents/Description";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Heroes />
      <Content />
      <Description />
      <Footer />
    </div>
  );
}
