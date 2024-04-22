import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Juan García Candón</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-body-secondary">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-body-secondary">
              Curriculum
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-body-secondary">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-body-secondary">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link px-2 text-body-secondary">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
