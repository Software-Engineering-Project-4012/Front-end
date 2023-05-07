import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Usermainpage = React.lazy(() => import("./pages/user_mainpage/user_main"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const ChooseQuestionnaire = React.lazy(() => import("./pages/ChooseQuestionnaire/ChooseQuestionnaire"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
