import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import Box from "../Box/Box";

import "./ChooseQuestionnaire.css";
import Menu from "../Menu/Menu";

function ChooseQuestionnaire() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleClick = () => {
    setIsDisplayed(!isDisplayed);
  };
  return (
    <div className="ChooseQuestionnaire">
      <div>
        <div onClick={handleClick}>
          <Header />
        </div>
        <div className="ChooseQuestionnaire-menus">
          <div>
            <div className="ChooseQuestionnaire-menu">
              <div>{isDisplayed && <Menu />}</div>
            </div>
          </div>
          <div>
            <Search />
            <div className="ChooseQuestionnaire-box">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
            <div>
              <img
                className="ChooseQuestionnaire-img"
                src="../../../images/statusbar.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ChooseQuestionnaire;
