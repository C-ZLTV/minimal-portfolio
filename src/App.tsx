import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero/Hero";
import SkillsShowcase from "./pages/SkillsShowcase/SkillsShowcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<SkillsShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
