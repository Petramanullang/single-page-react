import "./index.css";
import Navbar from "./assets/Navbar/Navbar";
import Heroes from "./assets/Heroes/Heroes";
import Content from "./assets/Contents/Content";
import Footer from "./assets/Footer/Footer";
import Description from "./assets/Contents/Description";
import Destination from "./assets/Contents/Destination";
import Video from "./assets/Contents/Video";

export default function App() {
  const footerList = ["About Us", "License", "Contact Us"];

  return (
    <div className="app-wrapper">
      <Navbar title={"JAPAN"} />
      <Heroes />
      <div className="flex flex-col justify-center items-center">
        <Content />
        <Description />
        <Destination />
        <span className="text-white text-5xl mt-20">Video</span>
        <Video />
        <Footer footList={footerList} />
      </div>
    </div>
  );
}
