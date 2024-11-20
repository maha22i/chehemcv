import "./App.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Profil from "./components/Profil";
import FormationsExperiences from "./components/FormationsExperiences";
import DarkMode from "./components/DarkMode";
import Footer from "./components/footer";
import { Preview, print } from "react-html2pdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function App() {
  const handleGenerateCv = () => {
    let cvTemplate = document.querySelector("#cv-print");
    cvTemplate.setAttribute("style", { width: "10mm " });
    cvTemplate.classList.add("cv-print");
    document.body.classList.remove("dark");
    setTimeout(() => {
      print("cv", "cv-print");
      cvTemplate.setAttribute("style", { width: "100% " });
      cvTemplate.classList.remove("cv-print");
    }, 200);
  };
  return (
    <Preview id={"cv-print"}>
      <div id="html2pdf" className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <button onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
              </button>
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </Preview>
  );
}

export default App;
