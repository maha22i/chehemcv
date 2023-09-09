import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <div class="footer-content">
      <p>&copy; 2022 Mohamed CHEHEM</p>
      <a
        href="https://drive.google.com/file/d/1LmOZBmO-Hchh5bUXhr-JEwv_4y5FThtq/view?usp=sharing"
        download="CHEHEM_Mohamed-cv.pdf"
      >
        <button>Télécharger CV en PDF</button>
      </a>
    </div>
  );
};

export default footer;
