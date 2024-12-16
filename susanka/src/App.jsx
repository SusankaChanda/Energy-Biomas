/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import "./App.css";
import Carousel from "./components/Carousel";
import MianSection from "./components/MianSection";
import OtherSections from "./components/OtherSections";
import Footer from "./components/Footer";
import ContactsLinks from "./components/ContactsLinks";

const updates = [
  {
    title:
      "Biobutanol Production: Godavari Biorefineries Partners with Catalyxx",
    link: "https://biobiz.in/2024/12/biobutanol-production-godavari-biorefineries-partners-with-catalyxx/",
  },
  {
    title: "Compressed Biogas Plants Using Cow Dung in Uttar Pradesh",
    link: "https://biobiz.in/2024/12/compressed-biogas-plants-using-cow-dung-in-uttar-pradesh/",
  },
  {
    title:
      "Steelmaking with Green Hydrogen: SAIL and John Cockerill India Collaborate",
    link: "https://biobiz.in/2024/12/steelmaking-with-green-hydrogen-sail-and-john-cockerill-india-collaborate/",
  },
  {
    title:
      "Sustainable Aviation Fuel Facility: BPCL to Launch India's First by 2027",
    link: "https://biobiz.in/2024/11/sustainable-aviation-fuel-facility-bpcl-to-launch-indias-first-by-2027/",
  },
  {
    title: "Green Hydrogen Solutions: NHPC Partners with GGGI",
    link: "https://biobiz.in/2024/11/green-hydrogen-solutions-nhpc-partners-with-gggi/",
  },
  {
    title:
      "India's First Green Hydrogen Fuel Station Built by Amara Raja Infra in Leh",
    link: "https://biobiz.in/2024/11/amara-raja-infra-builds-indias-first-green-hydrogen-fuel-station-in-leh/",
  },
  {
    title: "Waste Disposal Plant in Rudrapur to Generate Biogas",
    link: "https://biobiz.in/2024/11/waste-disposal-plant-in-rudrapur-to-generate-biogas/",
  },
  {
    title: "Biochar Integration by Tata Steel in India to Reduce Emissions",
    link: "https://biobiz.in/2024/11/tata-steel-pioneers-sustainability-in-india-with-biochar-integration-to-reduce-emissions/",
  },
  {
    title: "India's First Cowshed with Integrated CBG Plant Opens in Gwalior",
    link: "https://biobiz.in/2024/11/gwalior-hosts-indias-first-cowshed-with-integrated-cbg-plant/",
  },
  {
    title:
      "Biochar Use in Steelmaking Explored as IIT (ISM) Dhanbad Partners with sentra.world",
    link: "https://biobiz.in/2024/11/iit-ism-dhanbad-partners-with-sentra-world-to-explore-biochar-use-in-steelmaking/",
  },
  {
    title: "Ethanol Plant by Kisan Cooperative Sugar Mill in Pilibhit",
    link: "https://biobiz.in/2024/11/pilibhits-kisan-cooperative-sugar-mill-to-establish-ethanol-plant/",
  },
  {
    title: "World's Largest Sustainable Aviation Fuel Plants By TruAlt",
    link: "https://biobiz.in/2024/12/worlds-largest-sustainable-aviation-fuel-plants-by-trualt/",
  },
  {
    title:
      "Biofuel production from Seaweed Biomass: HPCL partners with Sea6 Energy",
    link: "https://biobiz.in/2024/12/biofuel-production-from-seaweed-biomass-hpcl-partners-with-sea6-energy/",
  },
  {
    title:
      "Green Hydrogen Plant in Baddi: Oil India and Himachal Pradesh Power Corporation partner",
    link: "https://biobiz.in/2024/12/green-hydrogen-plant-in-baddi-oil-india-and-himachal-pradesh-power-corporation-partner/",
  },
  {
    title: "Bio-CNG Plants in 2 Cow Shelters by Greater Noida Authority",
    link: "https://biobiz.in/2024/12/bio-cng-plants-in-2-cow-shelters-by-greater-noida-authority/",
  },
  {
    title: "Biogas Plant to Be Revived by Faridabad Municipal Corporation",
    link: "https://biobiz.in/2024/12/biogas-plant-to-be-revived-by-faridabad-municipal-corporation/",
  },
  {
    title: "Straw-Based Biogas Plant Commercialization",
    link: "https://biobiz.in/2024/12/straw-based-biogas-plant-commercialization/",
  },
  {
    title: "Biofuel from Carbon Dioxide: New Tech Developed by IIT Guwahati",
    link: "https://biobiz.in/2024/12/biofuel-from-carbon-dioxide-new-tech-developed-by-iit-guwahati/",
  },
  {
    title: "Biodiesel Deliveries: Aemetis India Completes $103 Million to OMCs",
    link: "https://biobiz.in/2024/12/biodiesel-deliveries-aemetis-india-completes-103-million-to-omcs/",
  },
  {
    title: "Green Hydrogen: TKIL Partners with Sohhytec",
    link: "https://biobiz.in/2024/12/green-hydrogen-tkil-partners-with-sohhytec/",
  },
];

const App = () => {
  return (
    <div>
      <div className="navbar-container">
        <Navbar />
        <ContactsLinks />
      </div>
      <Carousel />
      <div className="row website-content-row">
        <div className="col-12 col-md-8 website-content-container">
          <h6>
            At BioBiz, we are keen to capitalize on India’s rich biodiversity
            and the availability of large amounts of biomass residues to develop
            a sustainable bio-economy and attractive business opportunities for
            diverse stakeholders – farmers, rural stakeholders, end-use
            industries, entrepreneurs / startups, and financial investors
          </h6>
          <h6>
            As part of a leading climate tech consulting firm, we will provide
            critical assistance with market intelligence, data-driven analyses,
            professional networking, and opportunities for relevant stakeholders
            to get effective visibility.
          </h6>
        </div>
        <div className="col-12 col-md-4 website-updates-container">
          <div className="updates-container-heading d-flex justify-content-between">
            <div className="">
              <h1>Updates</h1>
              <div className="underline"></div>
            </div>
            <div className="d-flex align-items-center">
              <h7>View All</h7>
            </div>
          </div>
          <div className="updates-inner-container">
            {updates.map((item, index) => (
              <div key={index} className="updates-inner-container-item">
                <a href={item.link}>{item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row main-section-container">
        <MianSection />
      </div>
      <div className="row main-section-container">
        <OtherSections />
      </div>
      <Footer />
    </div>
  );
};

export default App;
