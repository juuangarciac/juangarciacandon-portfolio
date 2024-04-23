import React, { useEffect } from "react";
import GeneralCompetencesLogo from "../img/LogoCard_CompetenciaGeneral_es.png";
import SpecificCompetencesLogo from "../img/LogoCard_CompetenciaEspecifica_es.png";
import HomeBackground from "../img/home_background.png";
import { Competences } from "../data/Competences";
import { useState } from "react";


export const Inicio = () => {

  const [userName, setUserName] = useState("");

  const [generalCompetences, setgeneralCompetences] = useState([]);
  const [specificCompetences, setspecificCompetences] = useState([]);

  const filterDataByCompetence = (name) => {
    return Competences.filter(competence => competence.name === name);
  }

  const updateUserName = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    setgeneralCompetences(filterDataByCompetence("GeneralCompetence"));
    setspecificCompetences(filterDataByCompetence("SpecificCompetence"));
  }, []);

  return (
    <div className="bg-dark text-light">
      <div className="card text-center w-100">
        <img className="img" src={HomeBackground} alt="Color azul degradado" />

        <div class="card-img-overlay">
          <h1 class="card-title"><strong> Inicio </strong></h1>

          <div class="form-group">
            <input type="text" name="username" id="username" class="form-control w-25" placeholder="Introduzca su nombre..." onChange={updateUserName}/>
          </div> 

          <h1 class="card-title">Bienvenido a mi página web <strong>{userName}</strong></h1>
          <a href="SobreMi" class="btn btn-primary">Sobre mi</a>
        </div>

      </div>


      <div className="row" id="SobreMi">
        <h2 className="h2"> Sobre mi </h2>
      </div>


      <h2 className="h2"> Competencias </h2>
      <div className="row justify-content-center" id="Competencias">
          < h3 className="h3"> Competencias Generales</h3>
          {
            generalCompetences ? (
              generalCompetences.map(competence => 
                <div key={competence.id} className="card text-dark bg-light col-2 m-4">
                    <div class="card-body">
                    <img
                      src={GeneralCompetencesLogo}
                      className="card-img-top"
                      alt={"Logo Competencia General"}
                    ></img>
                      <p class="card-text">{competence.description}</p>
                    </div>
                </div>
              )
            ) : (
              <p>Cargando...</p>
            )
          }

          < h3 className="h3"> Competencias Específicas</h3>
          {
            specificCompetences ? (
              specificCompetences.map(competence => 
                <div key={competence.id} className="card text-dark bg-light col-2 m-4">
                    <div class="card-body">
                    <img
                      src={SpecificCompetencesLogo}
                      className="card-img-top"
                      alt={"Logo Competencia General"}
                    ></img>
                      <p class="card-text">{competence.description}</p>
                    </div>
                </div>
              )
            ) : (
              <p>Cargando...</p>
            )
          }
          < h3 className="h3"> Competencias de Tecnología de Información</h3>
      </div>

    </div>
  );
};
