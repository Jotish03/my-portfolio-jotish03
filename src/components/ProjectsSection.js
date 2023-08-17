import React from "react";

const ProjectsSection = () => {
  const handleAccessClick = () => {
    // Replace this URL with the actual URL you want to open
    const projectUrl = "https://www.example.com";
    window.open(projectUrl, "_blank");
  };

  return (
    <section id="projects" className="py-16 mt-[-80px] bg-black">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="glow-border"></div>
          <h2 className="text-2xl font-semibold mb-6 text-green-500">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Project Card 1 */}
            <div className="border border-green-500 border-solid rounded-lg p-4 relative overflow-hidden">
              <div className="glow-border"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Name
              </h3>
              <p className="text-gray-300 mb-4">
                Brief summary or description of the project.
              </p>
              <button
                className="border border-green-500 text-green-500 hover:bg-[#00ff00] hover:text-black px-4 py-2 rounded-lg"
                onClick={handleAccessClick}
              >
                Access
              </button>
            </div>
            <div className="border border-green-500 border-solid rounded-lg p-4 relative overflow-hidden">
              <div className="glow-border"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Name
              </h3>
              <p className="text-gray-300 mb-4">
                Brief summary or description of the project.
              </p>
              <button
                className="border border-green-500 text-green-500 hover:bg-[#00ff00] hover:text-black px-4 py-2 rounded-lg"
                onClick={handleAccessClick}
              >
                Access
              </button>
            </div>
            <div className="border border-green-500 border-solid rounded-lg p-4 relative overflow-hidden">
              <div className="glow-border"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Name
              </h3>
              <p className="text-gray-300 mb-4">
                Brief summary or description of the project.
              </p>
              <button
                className="border border-green-500 text-green-500 hover:bg-[#00ff00] hover:text-black px-4 py-2 rounded-lg"
                onClick={handleAccessClick}
              >
                Access
              </button>
            </div>
            <div className="border border-green-500 border-solid rounded-lg p-4 relative overflow-hidden">
              <div className="glow-border"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Name
              </h3>
              <p className="text-gray-300 mb-4">
                Brief summary or description of the project.
              </p>
              <button
                className="border border-green-500 text-green-500 hover:bg-[#00ff00] hover:text-black px-4 py-2 rounded-lg"
                onClick={handleAccessClick}
              >
                Access
              </button>
            </div>

            {/* Repeat similar structure for other project cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
