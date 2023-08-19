import React, { useRef, useEffect } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#000000] text-c8c8c8 transform transition-transform ease-in-out duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={sidebarRef}
    >
      <button
        className="mt-2 mx-2 close-button2 absolute top-1 right-1"
        onClick={onClose}
      >
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <nav className="mt-16 px-4">
        <a
          href="#"
          className=" p-5 hover:text-00ff00 hover:border-white mb-4 block border-white border rounded py-1"
        >
          Home
        </a>
        <a
          href="#about"
          className="p-5 hover:text-00ff00 hover:border-white mb-4 block border-white border rounded py-1"
        >
          About Me
        </a>
        <a
          href="#projects"
          className=" p-5 hover:text-00ff00 hover:border-white mb-4 block border-white border rounded py-1"
        >
          Projects
        </a>
        <a
          href="#contact"
          className=" p-5 hover:text-00ff00 hover:border-white mb-4 block border-white border rounded py-1"
        >
          Contact
        </a>
      </nav>
      {isOpen && (
        <div className="text-green-500 text-sm font-semibold px-4 py-2 absolute bottom-0 w-full text-center">
          Developed by Jotish Sharma
        </div>
      )}
    </div>
  );
};

export default Sidebar;
