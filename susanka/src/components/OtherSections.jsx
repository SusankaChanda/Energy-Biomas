// import { FaArrowRight } from "react-icons/fa";
import "../css/OtherSections.css";

const otherSections = [
  { id: 1, title: "India Updates" },
  { id: 2, title: "Weekly Updates" },
  { id: 3, title: "BRING" },
  { id: 4, title: "India Biomass Residues" },
];

const OtherSections = () => {
  return (
    <div className="other-section-container-inside d-flex flex-column ">
      <div className="other-section-container-inside-header">
        <h1>Other Sections</h1>
        <div className="underline"></div>
      </div>
      <div className="other-sections-container-content align-self-center">
        <div className="other-sections-button-container d-flex flex-wrap">
          {otherSections.map((item) => (
            <div key={item.id} className="other-sections-button col-6 col-md-3">
              <div className="other-sections-button-inside">
                <h5>
                  {item.title}
                  <span className="arrow-mark">→</span>
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 other-sections-footer">
          <p>BioBiz is a division of Energy Alternatives India (EAI)</p>
        </div>
      </div>
    </div>
  );
};

export default OtherSections;
