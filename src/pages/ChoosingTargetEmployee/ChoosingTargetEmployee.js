import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ChoosingTargetEmployee.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import SearchBox from "../../components/SearchBox";
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';

function ChoosingTargetEmployee () {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      

    return (
        <div className={styles.mainPage}>
            <Header />
            <SearchBox text="جست و جو در کارمندان" />
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="1" />
                </div>
                <div className={styles.container}>
                    <p>Hello</p>

                </div>

                
            </div>
            <ChangePageIcon next="/ChoosingSurveyTemplate" />
            <Footer />
        </div>
    )
}

export default ChoosingTargetEmployee;