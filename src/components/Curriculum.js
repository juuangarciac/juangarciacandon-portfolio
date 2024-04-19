import GeneralCompetencesLogo from '../img/LogoCard_CompetenciaGeneral_es.png'
import SpecificCompetencesLogo from '../img/LogoCard_CompetenciaEspecifica_es.png'
import { Competences } from "../data/Competences";

export const Curriculum = () => {

    const classifyCompetence = (competence) => {
        if(competence.name === "GeneralCompetence") {
            return {src: GeneralCompetencesLogo, alt: "Competencia General"}
        } else if(competence.name === "SpecificCompetence") {
            return {src: SpecificCompetencesLogo, alt: "Competencia Especifica"}
        } else {
            return {}
        }
    }

  return (
    <div className="container-fluid">
        <h1 className="h1">Curriculum</h1>

          <h2 className="h2 m-2">Competencias</h2>

          <section className="row justify-content-center">
            {Competences ? (
              Competences.map((competence) => (
                <div id={competence.id} class="card col-sm-8 m-sm-4 col-md-4 m-md-4 col-lg-3 m-lg-4 col-xl-2 m-xl-4 justify-content-center">
                    <img src={classifyCompetence(competence).src}  class="card-img-top" alt={classifyCompetence(competence).alt}></img>
                  <div class="card-body">
                    <p class="card-text">{competence.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Ups parace que ha habido un error. Intentelo de nuevo</p>
            )}
          </section>
          
          
          <h3 className="h3 m-3"> Competencias Específicas</h3>
          <h3 className="h3 m-3"> Competencias Tecnologías de la Información</h3>
    </div>
  );
};
