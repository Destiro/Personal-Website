import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="" exact element={<HomePage />}/>
            <Route path="/home" exact element={<HomePage />}/>
            <Route path="/about" exact element={<AboutPage />}/>
            <Route path="/projects" exact element={<ProjectsPage />}/>
            <Route path="/experience" exact element={<ExperiencePage />}/>
            <Route path="/contact" exact element={<ContactPage />}/>
        </Routes>
    </HashRouter>
  );
}
