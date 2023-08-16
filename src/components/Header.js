import React, { useState } from "react";

const Header = ({ onMenuClick, onSidebarToggle }) => {
  const [commandInput, setCommandInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = () => {
    if (commandInput.toLowerCase() === "/jotishresume") {
      // Simulate a PDF download (Replace with your PDF URL)
      const pdfUrl = "/joe.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "portfolio.pdf";
      link.click();
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Invalid command. Type '/jotishresume' to download my resume."
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleDownload();
    }
  };

  return (
    <div className="bg-0d1117 p-4 border-b border-gray-700">
      <div className="flex items-center justify-between flex-wrap md:flex-no-wrap">
        <div className="flex items-center space-x-4">
          <button className="menu-button md:hidden" onClick={onMenuClick}>
            <svg
              className="w-6 h-6 text-00ff00"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            className="terminal-search"
            placeholder="Enter a command..."
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="terminal-button" onClick={handleDownload}>
            Download
          </button>
        </div>
        <div className="w-full md:w-auto mt-2 md:mt-0">
          {errorMessage && (
            <p className="text-red-500 text-sm text-center md:text-left">
              {errorMessage}
            </p>
          )}
        </div>
        <nav className="w-full mt-2 md:w-auto md:mt-0 md:flex space-x-4 hidden md:block">
          <a href="#" className="hover:text-00ff00">
            Home
          </a>
          <a href="#about" className="hover:text-00ff00">
            About Me
          </a>
          <a href="#projects" className="hover:text-00ff00">
            Projects
          </a>
          <a href="#contact" className="hover:text-00ff00">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
