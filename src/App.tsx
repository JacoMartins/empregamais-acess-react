import { Main } from './styles/App.styles'
import SearchBlock from './components/SearchBlock';
import { homeData } from './utils/data';
import logo from "./assets/images/logo.svg";
import { Link } from 'react-router-dom';

function App() {

  return (
    <Main>
      <div className='row main'>
        <div className="logoContainer">
          <Link to='/'>
            <img src={logo}></img>
          </Link>
        </div>
        <div className='contentContainer'>
          <div className='textContainer'>
            <h1>Seja bem vindo!</h1>
            <h2>Comece clicando em um dos filtros de pesquisa</h2>
          </div>

          <div className='blocks'>
            {homeData.map((item, index) => (
              <SearchBlock
                title={item.title}
                img={item.img}
                icon={item.icon}
                alt={item.alt}
                isAvailable={item.isAvailable}
                bgColor={item.bgColor}
                fColor={item.fColor}
                isColorful={item.isColorful}
                link={item.link}
                href={item.href}
                key={item.title + index}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  )
}

export default App
