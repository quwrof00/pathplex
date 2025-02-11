import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import CareerDetails from "./pages/CareerDetails";
import CareersList from "./career/CareersList"; // Assuming you'll create this page
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/careers" element={<CareersList />} />
          <Route path="/careers/:careerSlug" element={<CareerDetails />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}
