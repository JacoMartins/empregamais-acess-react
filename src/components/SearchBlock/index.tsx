import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Main } from "./styles";

interface BlockColorProps {
  title: string;
  bgColor?: string;
  fColor?: string;
  img?: string;
  alt?: string;
  icon?: ReactNode;
  isAvailable: boolean;
  isColorful: boolean;
  link?: string | null;
  href?: string | null;
}

export default function SearchBlock({ title, img, alt, icon, bgColor, fColor, isAvailable, isColorful, link, href }: BlockColorProps) {
  if (link) {
    return (
      <Link to={link} className="text-decoration-none">
        <Main fColor={fColor} bgColor={bgColor} isColorful={isColorful} isAvailable={isAvailable}>
          <div className="title">
            <h3>{title}</h3>
            {!isAvailable && <span>Em breve</span>}
          </div>
          {img && <img src={img} alt={alt} />}
          {icon && icon}
        </Main>
      </Link>
    )
  }

  if(href){
    return(
      <a href={href} className="text-decoration-none">
      <Main fColor={fColor} bgColor={bgColor} isColorful={isColorful} isAvailable={isAvailable}>
        <div className="title">
          <h3>{title}</h3>
          {!isAvailable && <span>Em breve</span>}
        </div>
        {img && <img src={img} alt={alt} />}
        {icon && icon}
      </Main>
    </a>
    )
  }

  return (
    <Main fColor={fColor} bgColor={bgColor} isColorful={isColorful} isAvailable={isAvailable}>
      <div className="title">
        <h3>{title}</h3>
        {!isAvailable && <span>Em breve</span>}
      </div>
      {img && <img src={img} alt={alt} />}
      {icon && icon}
    </Main>
  )
}