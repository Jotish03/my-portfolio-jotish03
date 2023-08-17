import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="border border-green-500 border-solid rounded-lg p-8 relative overflow-hidden">
          <div className="glow-border"></div>
          <h2 className="text-2xl font-semibold mb-6 text-green-500">
            About Me
          </h2>
          <p className="text-gray-300">
            As a passionate developer and{" "}
            <span className="highlight">
              <span className="glow-text">UI/UX</span>
            </span>{" "}
            designer, I leverage my expertise in{" "}
            <span className="highlight">
              <span className="glow-text">JavaScript</span>
            </span>
            ,{" "}
            <span className="highlight">
              <span className="glow-text">React</span>
            </span>
            ,{" "}
            <span className="highlight">
              <span className="glow-text">React Native</span>
            </span>{" "}
            to create exceptional web experiences. With a strong foundation in{" "}
            <span className="highlight">
              <span className="glow-text">Next.js</span>
            </span>{" "}
            and the versatility of{" "}
            <span className="highlight">
              <span className="glow-text">CSS</span>
            </span>{" "}
            and{" "}
            <span className="highlight">
              <span className="glow-text">Tailwind CSS</span>
            </span>
            , I design and develop intuitive solutions that leave a lasting
            impact.
          </p>
          <p className="text-gray-300 mt-4">
            My journey began with a curiosity for coding and design, leading me
            to create user-centric web applications that contribute to
            open-source projects. With an insatiable thirst for knowledge, I am
            committed to pushing the boundaries of web technologies. Let&apos;s
            collaborate and turn your digital vision into reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
