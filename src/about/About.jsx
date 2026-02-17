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
          <br />
          <br />
          My core skills include organic synthesis (reaction mechanism understanding, multistep synthesis, and purification methods), key laboratory techniques such as recrystallization, distillation, extraction, and TLC, and basic experience with analytical techniques including UV-Vis, IR, NMR, and mass spectrometry. I am also comfortable using MS Office tools like Word, Excel, and PowerPoint for documentation, data analysis, and presentations.
          <br />
          <br />
          I bring strong analytical thinking and problem-solving, attention to detail and accuracy in experiments, and I am a quick learner who adapts easily to new environments. I value good communication, time management, hard work, and discipline in both academic and professional settings.
          <br />
          <br />
          I am actively seeking opportunities in the pharmaceutical, agrochemical, or fine chemical sectors where I can leverage my skills in synthesis and analysis to contribute to a dynamic R&amp;D, Process Development, or Quality Assurance team. Let's connect to discuss how my passion for chemistry can be an asset to your organization.
        </p>
        <a
          href="/DOC-20260104-WA0000..pdf"
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
