import { Main, NavButton } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Info, MagnifyingGlass, House } from 'phosphor-react';
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const [currentPage, setCurrentPage] = useState(currentPath ? currentPath : 'inicio');

  window.addEventListener('click', () => {
    setCurrentPage(currentPath ? currentPath : 'inicio');
  });

  const page = {
    inicio: {
      path: '/',
      name: 'inicio',
      selected() {
        return currentPage === this.name && true
      },
    },
    buscar: {
      path: '/buscar',
      name: 'buscar',
      selected() {
        return currentPage === this.name && true
      },
    },
  }

  function handleNavClick(path: string) {
    setCurrentPage(path);
  }

  function iconSelected(isSelected: boolean) {
    return isSelected ? 'fill' : 'regular'
  }

  return (
    <Main>
      <div className="navContainer">
        <div className="logoContainer">
          <img src={logo}></img>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={page.inicio.path}>
                <NavButton isSelected={page.inicio.selected()} onClick={() => handleNavClick(page.inicio.name)}><House size={24} weight={iconSelected(page.inicio.selected())} />Início</NavButton>
              </Link>
            </li>
            <li>
              <Link to={page.buscar.path}>
                <NavButton isSelected={page.buscar.selected()} onClick={() => handleNavClick(page.buscar.name)}><MagnifyingGlass size={24} weight={iconSelected(page.buscar.selected())} />Buscar</NavButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footerContainer">
        <a>Política de Privacidade</a>
      </div>
    </Main>
  )
}