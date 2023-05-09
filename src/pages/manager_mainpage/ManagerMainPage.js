import React, { useState, useEffect } from "react";
import "./main1.css";
import "./global.css";
import Header from "../../components/adminHeader";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import SearchBox from "../../components/SearchBox";

const arr=['icon1','تاریخ پایان','پرسشنامه','کارمند','نام نظرسنجی','ردیف'];
const ManagerMainPage = () => {
  return (
    <div className="managerMainPage">
      <Header />
      <SearchBox />
      <div className="table-body">
      <Table columns={columns} values={values} data={data}  className="table" />
      </div>
      <Footer />
    </div>
  );
};

export default ManagerMainPage;
