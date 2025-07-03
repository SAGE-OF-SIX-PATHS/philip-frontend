import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
// const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
// const Works = lazy(() => import("./pages/Works"));
// const Blogs = lazy(() => import("./pages/Blogs"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
    </Suspense>
  </Router>
);

export default App;
