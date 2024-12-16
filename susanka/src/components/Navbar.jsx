import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://biobiz.in/wp-content/uploads/2023/12/biobiz-logo.png"
            alt="biobiz-logo"
            className="biobiz-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse background-color-navbar"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a
                className="nav-link nav-link-item-a  "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-item-a " href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-item-a " href="#">
                India Updates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-item-a " href="#">
                Opportunities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-item-a " href="#">
                BioBiz Consulting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-item-a " href="#">
                Innovation Insights
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  .classList.add("show")
              }
              onMouseLeave={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  .classList.remove("show")
              }
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Insights
              </a>
              <ul className="dropdown-menu gap-2 hover-effect-ul">
                <li>
                  <a className="dropdown-item" href="#">
                    Bioenergy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Environmental Solutions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bio Products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bio-based Science & Tech Pathways
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Regional Biomass Residues
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    India Biomass Residues
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Indian Bioeconomy
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                BRING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
