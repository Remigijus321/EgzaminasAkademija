import React from "react";

import '../../App.css';


import AuthContext from "../11Context/AuthContext";
import Admin from "../04Admin/AdminContainer";
import NotFound from "../03NotFound/NotFound";


export const MainContainer = () => {
  const currentUser = React.useContext(AuthContext);
  switch (currentUser.state.role){
    case "ADMIN": return (
      <div className="mt-3">
        <Admin />
      </div>); 
    case "USER": return (
      <div className="mt-3">
        <h1>Exam</h1>
      </div>); 
    default: return (
      <div className="mt-3">
        <NotFound />
      </div>
    )
  }
};

export default MainContainer;
