import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss"
function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro/>
       <Education/>
       <Skills/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
