import React, { useState, useEffect } from "react";
import "./main1.css";
import "./global.css";
import Header from "../../components/adminHeader";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import SearchBox from "../../components/SearchBox";
import managerData from "../../MOCK_DATA (1).json"

const arr=['icon1','تاریخ پایان','پرسشنامه','کارمند','نام نظرسنجی','ردیف'];
const ManagerMainPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/questionnaire/questionnaires/")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

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
