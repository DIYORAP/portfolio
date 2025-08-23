import "./about.css";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__info">
        <p className="about__description">
          Hello!
          <br />
          Fascinated by the art of molecular architecture, I am an aspiring Organic Chemist completing my Master's degree from the Department of Chemistry at Gujarat University. My academic journey, which began with a solid foundation in chemistry at R. G. Shah Science College, has culminated in a deep specialization in organic synthesis, stereochemistry, and the spectroscopic elucidation of complex molecules.

          In the lab, I am adept at planning and executing multi-step syntheses, purifying compounds, and analyzing results using modern analytical techniques like NMR, FT-IR, and chromatography. I am driven by a desire to solve complex chemical problems and contribute to innovative projects that have a real-world impact.

          I am actively seeking opportunities in the pharmaceutical, agrochemical, or fine chemical sectors where I can leverage my skills in synthesis and analysis to contribute to a dynamic R&D, Process Development, or Quality Assurance team. Let's connect to discuss how my passion for chemistry can be an asset to your organization.


        </p>
        <a
          href="/"
          download="/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
