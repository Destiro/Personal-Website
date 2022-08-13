import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/experience" element={<ExperiencePage />}/>
            <Route path="/contact" element={<ContactPage />}/>
        </Routes>
    </BrowserRouter>
  );
}
