import { MagnifyingGlass } from "phosphor-react";
import SearchBlock from "../../components/SearchBlock";
import { Main, SearchInput } from "./styles";
import { searchByCity, searchByCommunities, searchBySector } from "../../utils/data";
import { useEffect, useState } from "react";
import { ReactNode } from 'react';
import logo from "../../assets/images/logo.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface SearchBlockData {
  title: string;
  bgColor: string;
  fColor?: string;
  isAvailable: boolean;
  isColorful: boolean;
  img?: any;
  alt?: any;
  icon?: ReactNode;
  link?: string | null;
  href?: string | null;
}

export default function Buscar() {
  const [searchInput, setSearchInput] = useState('');
  const [filterCitySearch, setFilterCitySearch] = useState(searchByCity as SearchBlockData[]);
  const [filterSectorSearch, setFilterSectorSearch] = useState(searchBySector as SearchBlockData[]);
  const [filterCommunitiesSearch, setFilterCommunitiesSearch] = useState(searchByCommunities as SearchBlockData[]);
  const params = useParams();

  const [scrolled, setScrolled] = useState(false);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    setFilterCitySearch(
      searchByCity.filter(
        (item) => item.title
          .toLowerCase()
          .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
          .includes(searchInput.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')))
    );

    setFilterSectorSearch(
      searchBySector.filter(
        (item) => item.title
          .toLowerCase()
          .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
          .includes(searchInput.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')))
    );

    setFilterCommunitiesSearch(
      searchByCommunities.filter(
        (item) => item.title
          .toLowerCase()
          .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
          .includes(searchInput.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')))
    );
  }, [searchInput]);

  function scrollToCategory() {
    const element = document.getElementById(params.category as string);

    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
      setScrolled(true);
    }
  }

  !scrolled && setTimeout(() => {
    scrollToCategory();
  }, 0);

  return (
    <Main>
      <div className="logoContainer">
        <Link to='/'>
          <img src={logo}></img>
        </Link>
      </div>

      <div className='row'>
        <h1>Buscar</h1>
        <SearchInput>
          <MagnifyingGlass weight='regular' />
          <input type="text" placeholder='Buscar por palavra-chave' onChange={handleChangeInput} />
        </SearchInput>
      </div>

      {filterCitySearch.length !== 0 &&
        <div className='row' id='cidade'>
          <h2>Navegar por cidade</h2>
          <div className='blocks'> {
            filterCitySearch.map(
                (item, index) => (
                  <SearchBlock
                    title={item.title}
                    img={item.img}
                    icon={item.icon}
                    alt={item.alt}
                    isAvailable={item.isAvailable}
                    isColorful={item.isColorful}
                    bgColor={item.bgColor}
                    fColor={item.fColor}
                    link={item.link}
                    href={item.href}
                    key={item.title + index}
                  />
                )
              )}
          </div>
        </div>}

        {filterSectorSearch.length !== 0 &&
        <div className='row' id='setor'>
          <h2>Navegar por setor</h2>
          <div className='blocks'> {
            filterSectorSearch.map(
                (item, index) => (
                  <SearchBlock
                    title={item.title}
                    img={item.img}
                    icon={item.icon}
                    alt={item.alt}
                    isAvailable={item.isAvailable}
                    isColorful={item.isColorful}
                    bgColor={item.bgColor}
                    fColor={item.fColor}
                    link={item.link}
                    href={item.href}
                    key={item.title + index}
                  />
                )
              )}
          </div>
        </div>}

        {filterCommunitiesSearch.length !== 0 &&
        <div className='row' id='comunidades'>
          <h2>Navegar por comunidades</h2>
          <div className='blocks'> {
            filterCommunitiesSearch.map(
                (item, index) => (
                  <SearchBlock
                    title={item.title}
                    img={item.img}
                    icon={item.icon}
                    alt={item.alt}
                    isAvailable={item.isAvailable}
                    isColorful={item.isColorful}
                    bgColor={item.bgColor}
                    fColor={item.fColor}
                    link={item.link}
                    href={item.href}
                    key={item.title + index}
                  />
                )
              )}
          </div>
        </div>}
    </Main >
  )
}