import React from "react";
import style from "./user_main.module.css"
import SearchBox from "../../components/SearchBox"
import Footer  from   "../../components/Footer"
import Header from "../../components/User_Header";
import Notification from "../../components/Notification";

const columns=['تاریخ پایان','کارمند','نام نظرسنجی','ردیف'];
const values=['deadline','employee','template'];

const UsermainpagePage = () => {
    return (
        <>
      <div className={style.user_main_page}>
         <Header/>
         <SearchBox  text="جست‌و‌جو در نظرسنجی‌ها" columns={columns} values={values} apilink="http://localhost:8000/questionnaire/questionnaires/"/>

         <Footer/>
      </div>
      <Notification/>
      
      
     </> 
     );
  };
  
  export default UsermainpagePage;



