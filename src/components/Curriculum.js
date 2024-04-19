import GeneralCompetencesLogo from "../img/LogoCard_CompetenciaGeneral_es.png";
import SpecificCompetencesLogo from "../img/LogoCard_CompetenciaEspecifica_es.png";
import { Competences } from "../data/Competences";
import { useEffect, useState } from "react";

export const Curriculum = () => {
  const [data, setData] = useState([]);

  const classifyCompetence = (competence) => {
    if (competence.name === "GeneralCompetence") {
      return { src: GeneralCompetencesLogo, alt: "Competencia General" };
    } else if (competence.name === "SpecificCompetence") {
      return { src: SpecificCompetencesLogo, alt: "Competencia Especifica" };
    } else {
      return {};
    }
  };

  const loadData = (competenceType) => {
    if (competenceType === "all") {
      setData(Competences);
    } else {
      const filteredCompetences = Competences.filter(
        (competence) => competence.name === competenceType
      );
      setData(filteredCompetences);
    }
    console.log(data);
  };

  useEffect(() => {
    setData(Competences);
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="h1">Curriculum</h1>

      <section className="row">

        <div className="col-2 bg-light">
            <h5 className="h5">Filtrar por:</h5>
            <div class="form-check">
              <label class="form-check-label">
                <h6 className="h6">tipo de competencia</h6>
                <input type="checkbox" class="form-check-input" name="competenciasGenerales" id="competenciasGenerales" value="checkedValue"/>
                Competencias Generales
              </label>
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" name="competenciasEspecificas" id="competenciasEspecificas" value="checkedValue"/>
                Competencias Específicas
              </label>
            </div>
        </div>

        <div className="col-10">

        <h1 className="h2">Competencias</h1>

          <section className="row justify-content-around">
            <div className="col-2">
              {" "}
              <button
                type="button"
                onClick={() => loadData("all")}
                class="btn btn-primary btn-lg btn-block"
              >
                Todas
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => loadData("GeneralCompetence")}
                class="btn btn-primary btn-lg btn-block"
              >
                Generales
              </button>
            </div>
            <div className="col-2">
              {" "}
              <button
                type="button"
                onClick={() => loadData("SpecificCompetence")}
                class="btn btn-primary btn-lg btn-block"
              >
                Específicas
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => loadData("SpecificCompetence")}
                class="btn btn-primary btn-lg btn-block"
              >
                Tecnología de la Información
              </button>
            </div>
          </section>

          <section className="row justify-content-center">
            {data ? (
              data.map((competence) => (
                <div
                  id={competence.id}
                  class="card col-sm-8 m-sm-4 col-md-4 m-md-4 col-lg-3 m-lg-4 col-xl-3 m-xl-4 justify-content-center"
                >
                  <img
                    src={classifyCompetence(competence).src}
                    class="card-img-top"
                    alt={classifyCompetence(competence).alt}
                  ></img>
                  <div class="card-body">
                    <p class="card-text">{competence.description}</p>
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
