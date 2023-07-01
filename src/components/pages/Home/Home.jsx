import React from "react";
import { Link } from "react-router-dom";
import odontologia1 from "../../assets/img/odontologia1.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="texto">
        <h1>¿Por qué es tan importante acudir al odontólogo?</h1>
       <p>
        Se recomienda acudir al odontólogo una vez cada seis meses. 
        Entre visita y visita es muy importante realizar una buena 
        rutina de higiene oral. Los tratamientos profesionales 
        pueden fracasar si la boca no se mantiene en buen estado. 
        </p>

      </div>
      <img src={odontologia1} />
    </div>
  );
};
