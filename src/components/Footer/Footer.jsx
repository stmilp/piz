import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Pizza Slice</h5>
        <p>Лучшая пицца в городе, попробуйте!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Доставка</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Круглосуточно</span>
            <p>24/7</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Среднее время</span>
            <p>27 минут</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
