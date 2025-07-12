import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Lazy load your pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Blogs = lazy(() => import("./pages/BlogPage")); // ✅ Make sure this matches your file name!

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* ✅ Main landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Blogs page */}
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
