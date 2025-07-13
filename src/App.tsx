import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Lazy load your pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage")); // ✅ Make sure this matches your file name!

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* ✅ Main landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ contact page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
