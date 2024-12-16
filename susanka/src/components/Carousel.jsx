import "../css/Carousel.css";

// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.webp";
// import img3 from "../assets/3.webp";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item carousel-item-img1 active"
          data-bs-interval="2000"
        >
          <div className="carousel-item-img1-text">
            <h1>
              Accelerating India’s Sustainability <br />
              through <span>Biomass</span>
            </h1>
          </div>
        </div>

        <div
          className="carousel-item carousel-item-img2"
          data-bs-interval="2000"
        >
          <div className="d-flex justify-content-center align-items-center carousel-item-img2-text">
            <div className="carousel-item-img2-text-content d-flex justify-content-center align-items-center">
              <p>
                At BioBiz, we are keen to capitalize on India’s rich
                biodiversity and the availability of large amounts of biomass
                residues to develop a sustainable bio-economy and attractive
                business opportunities for diverse stakeholders – farmers, rural
                stakeholders, end-use industries, entrepreneurs / startups, and
                financial investors.
              </p>
            </div>
          </div>
        </div>
        <div
          className="carousel-item carousel-item-img3"
          data-bs-interval="2000"
        >
          <div className="d-flex justify-content-center align-items-center carousel-item-img2-text">
            <div className="carousel-item-img2-text-content d-flex justify-content-center align-items-center">
              <p>
                Who We Are We are pioneers in driving sustainability and
                fostering a greener future. At BioBiz, our mission is to harness
                the power of biomass and India's rich biodiversity to create
                innovative solutions for a sustainable bio-economy.
              </p>
            </div>
          </div>
        </div>

        <div
          className="carousel-item carousel-item-img9"
          data-bs-interval="2000"
        >
          <div className="d-flex justify-content-center align-items-center carousel-item-img2-text">
            <div className="carousel-item-img2-text-content d-flex justify-content-center align-items-center">
              <p>
                At BioBiz, we are keen to capitalize on India’s rich
                biodiversity and the availability of large amounts of biomass
                residues to develop a sustainable bio-economy and attractive
                business opportunities for diverse stakeholders – farmers, rural
                stakeholders, end-use industries, entrepreneurs / startups, and
                financial investors.
              </p>
            </div>
          </div>
        </div>

        <div
          className="carousel-item carousel-item-img5"
          data-bs-interval="2000"
        >
          <div className="d-flex justify-content-center align-items-center carousel-item-img2-text">
            <div className="carousel-item-img2-text-content d-flex justify-content-center align-items-center">
              <p>
                At BioBiz, we are keen to capitalize on India’s rich
                biodiversity and the availability of large amounts of biomass
                residues to develop a sustainable bio-economy and attractive
                business opportunities for diverse stakeholders – farmers, rural
                stakeholders, end-use industries, entrepreneurs / startups, and
                financial investors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
