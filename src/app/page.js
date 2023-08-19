"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TypingText from "../components/TypingText";
import AboutMe from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import QualificationsSection from "@/components/QualificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-0d1117 text-c8c8c8 font-mono">
      <Header onMenuClick={handleMenuClick} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="bg-0d1117 p-4 mt-4 md:mt-12 shadow-md rounded">
        <TypingText />
      </div>
      <AboutMe />
      <ProjectsSection />
      <QualificationsSection />
      <ContactSection />
      <Footer />
      {/* ... Rest of your content */}
    </div>
  );
};

export default Home;
