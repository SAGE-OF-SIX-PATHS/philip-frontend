import React from "react";
import Navbar from "../components/navigations/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";

const LandingPage: React.FC = () => {
          return (
                    <main className="min-h-screen p-10">
                              
                              <Portfolio />
                              <Navbar />
                    </main>
          );
};

export default LandingPage;
