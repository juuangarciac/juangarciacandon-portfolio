import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">© 2024 Juan García Candón</p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/#" class="nav-link px-2 text-body-secondary">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a href="/#" class="nav-link px-2 text-body-secondary">
              Curriculum
            </a>
          </li>
          <li class="nav-item">
            <a href="/#" class="nav-link px-2 text-body-secondary">
              Proyectos
            </a>
          </li>
          <li class="nav-item">
            <a href="/#" class="nav-link px-2 text-body-secondary">
              Servicios
            </a>
          </li>
          <li class="nav-item">
            <a href="/#" class="nav-link px-2 text-body-secondary">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
