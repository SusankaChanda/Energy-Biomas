import { FaWhatsappSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../css/ContactsLink.css";

const ContactsLinks = () => {
  return (
    <div className="contacts-links-main-container">
      <div className="contacts-links-container">
        <FaWhatsappSquare className="contacts-links-icon contacts-links-icon-whatsapp" />
        <CiLinkedin className="contacts-links-icon contacts-links-icon-linkedin" />
        <FaTelegram className="contacts-links-icon contacts-links-icon-telegram" />
        <FaFacebook className="contacts-links-icon contacts-links-icon-facebook" />
        <MdEmail className="contacts-links-icon contacts-links-icon-email" />
        <FaInstagram className="contacts-links-icon contacts-links-icon-instagram" />
        <FaYoutube className="contacts-links-icon contacts-links-icon-youtube" />
      </div>
    </div>
  );
};

export default ContactsLinks;
