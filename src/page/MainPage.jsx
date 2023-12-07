import "../style_page/Style_MainPage.css";
import Headerlight from "../component/Headerlight";

const MainPage = () => {
  return (
    <div className="base_MainPage">
      <div className="Header">
        <Headerlight />
      </div>
      <div className="Body"></div>
      <div className="Footer"></div>
    </div>
  );
};

export default MainPage;
