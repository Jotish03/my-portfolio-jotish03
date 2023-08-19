import React, { useState } from "react";
import "../styles/QualificationsSection.css"; // Update the CSS file path

const QualificationsSection = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleClick = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="qualifications" className="py-16 mt-[-80px]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-green-500">
          Qualifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Year 2020 */}
          <div className="flip" onClick={() => handleClick(0)}>
            <div className={`flip-inner ${flipped[0] ? "flipped" : ""}`}>
              <div className="flip-back">
                <p className="text-[16px] font-semibold">
                  Lovely Professional University
                </p>
                <p className="text-gray-300">Bachelor of Technology</p>
              </div>
              <div className="flip-front">
                <p className="text-gray-300 text-lg">June 2017 - July 2021</p>
                <p className="text-gray-500">Flip to know more</p>
              </div>
            </div>
          </div>
          <div className="flip" onClick={() => handleClick(1)}>
            <div className={`flip-inner ${flipped[1] ? "flipped" : ""}`}>
              <div className="flip-back">
                <p className="text-[16px] font-semibold">
                  Advance Technical Training Centre
                </p>
                <p className="text-gray-300">Diploma in Computer Science</p>
              </div>
              <div className="flip-front">
                <p className="text-gray-300 text-lg">Jan 2015 - Aug 2017</p>
                <p className="text-gray-500">Flip to know more</p>
              </div>
            </div>
          </div>
          <div className="flip" onClick={() => handleClick(2)}>
            <div className={`flip-inner ${flipped[2] ? "flipped" : ""}`}>
              <div className="flip-back">
                <p className="text-[16px] font-semibold">
                  West Point Senior Sec. School
                </p>
                <p className="text-gray-300">Standard XII</p>
              </div>
              <div className="flip-front">
                <p className="text-gray-300 text-lg">Jan 2014 - Dec 2015</p>
                <p className="text-gray-500">Flip to know more</p>
              </div>
            </div>
          </div>
          <div className="flip" onClick={() => handleClick(3)}>
            <div className={`flip-inner ${flipped[3] ? "flipped" : ""}`}>
              <div className="flip-back">
                <p className="text-[16px] font-semibold">
                  Kyi De Khang Secondary School
                </p>
                <p className="text-gray-300">Standard X</p>
              </div>
              <div className="flip-front">
                <p className="text-gray-300 text-lg">Jan 2013 - Dec 2014</p>
                <p className="text-gray-500">Flip to know more</p>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other years */}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
