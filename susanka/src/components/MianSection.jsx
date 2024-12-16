import "../css/MainSection.css";

const section = [
  {
    id: 1,
    title: "opportunities",
    description:
      "Discover exciting opportunities in the bio-based economy. From sustainable agriculture to innovative bio-products, explore potential ventures and partnerships in India's growing bioeconomy sector.",
    image: "https://biobiz.in/wp-content/uploads/2024/10/opportunity.png",
  },
  {
    id: 2,
    title: "Consutling",
    description:
      "Get expert guidance on bio-based solutions. Our consulting services cover everything from market analysis to regulatory compliance, helping you navigate the complexities of the bioeconomy.",
    image: "https://biobiz.in/wp-content/uploads/2024/10/consulting.png",
  },
  {
    id: 3,
    title: "Insights",
    description:
      "Stay ahead of the curve with our cutting-edge insights. Our team provides regular updates on the latest trends, technologies, and market opportunities in the bioeconomy.",
    image: "https://biobiz.in/wp-content/uploads/2024/10/insights.png",
  },
  {
    id: 4,
    title: "Innovation Insights",
    description:
      "Stay ahead of the curve with our cutting-edge insights. Our team provides regular updates on the latest trends, technologies, and market opportunities in the bioeconomy.",
    image: "https://biobiz.in/wp-content/uploads/2024/10/innovations.png",
  },
  {
    id: 5,
    title: "Biomass Residue Intelligence",
    description:
      "Stay ahead of the curve with our cutting-edge insights. Our team provides regular updates on the latest trends, technologies, and market opportunities in the bioeconomy.",
    image: "https://biobiz.in/wp-content/uploads/2024/10/leaf.png",
  },
];

function MianSection() {
  return (
    <div className="main-section-container-inside">
      <div className="main-section-container-inside-header">
        <h1>Main Section</h1>
        <div className="underline"></div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {section.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-4 d-flex justify-content-center"
          >
            <div className="d-flex flex-row main-section-card">
              <div className="d-flex align-items-center justify-content-center">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MianSection;
