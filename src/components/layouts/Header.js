import React from "react";
import Logo from '../../Ico.png'
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container col-6">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" height={'60px'}/>
          </NavLink>
        </div>

        <div className="container col-6 justify-content-end">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/curriculum">
                  Curriculum
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
