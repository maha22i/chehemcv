import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <div class="footer-content">
      <p>&copy; 2022 Mohamed CHEHEM</p>
      <a
        href="https://drive.google.com/file/d/1bCKxF3p4Xa1zOVGKA9Lxb2KyWcjHKjXd/view?usp=sharing"
        download="CHEHEM_Mohamed-cv.pdf"
      >
        <button>Télécharger CV en PDF</button>
      </a>
    </div>
  );
};

export default footer;
