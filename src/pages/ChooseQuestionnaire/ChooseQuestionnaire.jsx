import React, { useState } from "react";
import Header from "../../components/adminHeader";
import Footer from "../../components/Footer";
// import Search from "../Search/Search";
// import Box from "../Box/Box";

import "./ChooseQuestionnaire.css";
// import Menu from "../Menu/Menu";

function ChooseQuestionnaire() {

  return (
    <div className="ChooseQuestionnaire">
      <div>
        <Header />
        <div className="ChooseQuestionnaire-menus">
          <div>
            {/* <Search /> */}
            <div className="ChooseQuestionnaire-box">
              {/* <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box /> */}
            </div>
            <div>
              {/* <img
                className="ChooseQuestionnaire-img"
                src="../../../images/statusbar.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ChooseQuestionnaire;
