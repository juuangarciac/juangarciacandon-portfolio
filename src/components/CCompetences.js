import GeneralCompetencesLogo from "../img/LogoCard_CompetenciaGeneral_es.png";
import SpecificCompetencesLogo from "../img/LogoCard_CompetenciaEspecifica_es.png";
import ITCompetencesLogo from "../img/LogoCard_CompetenciaIT_es.png";
import { Competences } from "../data/Competences";
import { useState } from "react";

export const CCompetences = () => {
  
  const [data, setData] = useState(Competences);
  const [checkBox, setcheckBox] = useState([
    {
      name: "GeneralCompetence",
      checked : false
    },
    {
      name: "SpecificCompetence",
      checked : false
    },
    {
      name: "ITCompetence",
      checked : false
    }
  ]);

  const competenceLogo = (competence) => {
    if (competence.name === "GeneralCompetence") {
      return { src: GeneralCompetencesLogo, alt: "Competencia General" };
    } else if (competence.name === "SpecificCompetence") {
      return { src: SpecificCompetencesLogo, alt: "Competencia Especifica" };
    } else {
      return { src: ITCompetencesLogo, alt: "Competencia TIC" };
    }
  };

  const handleClick = (index) => {
    checkBox[index].checked = !checkBox[index].checked;
    setcheckBox(checkBox);

    /*Compruebo si estan a false todos*/
    let allFalse = true;
    for(let i = 0; i < checkBox.length && allFalse; ++i) {
      if(checkBox[i].checked) allFalse = false;
    }

    if(allFalse) {
      setData(Competences);
    } else {
      let filteredData = [];
      for(let i = 0; i < checkBox.length; ++i){
        if(checkBox[i].checked){
          console.log(checkBox[i].name);
          const matchingCompetences = Competences.filter(competence => competence.name === checkBox[i].name);
          filteredData.push(...matchingCompetences); // Añadir los elementos al array
        }
        
      }
     setData(filteredData);
    }
  }

  return (
    <div className="container-fluid">
      <section className="row">

        <div className="col-2 bg-light">
            <h5 className="h5">Filtrar por:</h5>
            <div className="form-check">
              <label className="form-check-label">
                <h6 className="h6">Tipo de competencia</h6>
                <input type="checkbox" className="p form-check-input" name="competenciasGenerales" id="competenciasGenerales" value="checkedValue" onClick={() => handleClick(0)}/>
                Competencias Generales
              </label>
              <label className="form-check-label">
                <input type="checkbox" className="p form-check-input" name="competenciasEspecificas" id="competenciasEspecificas" value="checkedValue" onClick={() => handleClick(1)}/>
                Competencias Específicas
              </label>
              <label className="form-check-label">
                <input type="checkbox" className="p form-check-input" name="competenciasEspecificas" id="competenciasEspecificas" value="checkedValue" onClick={() => handleClick(2)}/>
                Tecnología de la Información
              </label>
            </div>
        </div>

        <div className="col-8">

        <h1 className="h2">Competencias</h1>

          <section className="row justify-content-center">
            {data ? (
              data.map((competence) => (
                <div
                  key={competence.id}
                  id="competence"
                  className="card col-sm-8 m-sm-4 col-md-4 m-md-4 col-lg-3 m-lg-4 col-xl-3 m-xl-4 justify-content-center"
                >
                  <img
                    src={competenceLogo(competence).src}
                    className="card-img-top"
                    alt={competenceLogo(competence).alt}
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{competence.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Ups parace que ha habido un error. Intentelo de nuevo</p>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};
