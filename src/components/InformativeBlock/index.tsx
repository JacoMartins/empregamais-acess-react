import { Main } from "./styles";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from 'phosphor-react';

interface InformativeBlockProps {
  color?: string;
  img: string;
  h3?: string;
  h1?: string;
  alt?: string;
}

export default function InformativeBlock({ h3, h1, color, img, alt }:InformativeBlockProps) {
  return (
    <Main color={color}>
      <div className="textContainer">
        <h3>{h3}</h3>
        <h1>{h1}</h1>

        <div className="buttonContainer">
          <Link to='/buscar'>
            <button type="button"><MagnifyingGlass weight='regular' size={24} />Buscar</button>
          </Link>
        </div>
      </div>

      <div className="pictureContainer">
        <img src={img} alt={alt} />
      </div>
    </Main>
  )
}