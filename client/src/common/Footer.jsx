import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <div className="mt-60 footer">
      <div className=" sb_footer section_p">
        <div className="footer_link">
          <div className="footer_linkd">
            <h4>For Work</h4>
            <a href="/person">
              <p>Person Daily Update</p>
            </a>
            <a href="/activite">
              <p>Person Activite Check</p>
            </a>
            <a href="/individual">
              <p>Individual Daily Update</p>
            </a>
          </div>
          <div className="footer_linkd">
            <h4>Rolles</h4>
            <a href="/rolle">
              <p>Yesterday Activite </p>
            </a>
            <h4>Rolles</h4>
            <a href="/rolle">
              <p>Today Activite </p>
            </a>
            <h4>Rolles</h4>
            <a href="/rolle">
              <p>Roald Block </p>
            </a>
          </div>
          <div className="footer_linkd">
            <h4>Partners</h4>
            <a href="/person">
              <p>Technicien </p>
              <p>Designer </p>
              <p>Programmes</p>
              <p>Developers</p>
              <p>Solutions Maker</p>
            </a>
          </div>
          <div className="footer_linkd">
            <h4>Company</h4>
            <a href="/about">
              <p>About </p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
        </div>
        <div className="footer_below">
          <div className="footer_copyright">
            <p>@{new Date().getFullYear()} Aws Company. All right reserved. </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
