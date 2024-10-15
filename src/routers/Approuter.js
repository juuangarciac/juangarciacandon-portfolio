import React from 'react'

import { Header } from '../components/layouts/Header.js'
import { Footer } from '../components/layouts/Footer.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Inicio} from '../components/Inicio.js'
import { CCompetences } from '../components/CCompetences.js'
import { Projects } from '../components/Projects.js'
import { AboutMe } from '../components/AboutMe.js'
import { Contact } from '../components/Contact.js'

export const Approuter = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        
          <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/curriculum" element={<CCompetences />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>

        <Footer />
        </BrowserRouter>
    </div>
  )
}
