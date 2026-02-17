import "./info.css";

const Info = () => {
  return (
    <section className="info container section" id="info">
      <h2 className="section__title">Information</h2>

      <div className="info__content">
        <div className="info__block">
          <h3 className="info__subtitle">Skills</h3>
          <ul className="info__list">
            <li className="info__item">
              <strong>Organic Synthesis:</strong> Basic knowledge of reaction mechanism understanding, multistep synthesis, and purification methods.
            </li>
            <li className="info__item">
              <strong>Laboratory Techniques:</strong> Recrystallization, distillation, extraction, chromatography (TLC).
            </li>
            <li className="info__item">
              <strong>Analytical Techniques:</strong> UV-Vis, IR, NMR, Mass spectrometry (basic knowledge).
            </li>
            <li className="info__item">
              <strong>Computational / Software:</strong> MS Office (Word, Excel, PowerPoint).
            </li>
          </ul>
        </div>

        <div className="info__block">
          <h3 className="info__subtitle">Strengths</h3>
          <ul className="info__list">
            <li className="info__item">Analytical thinking and problem-solving.</li>
            <li className="info__item">Attention to detail and accuracy in experiments.</li>
            <li className="info__item">Quick learner and adaptable.</li>
            <li className="info__item">Good communication skills.</li>
            <li className="info__item">Time management.</li>
            <li className="info__item">Hard work.</li>
            <li className="info__item">Discipline.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;

