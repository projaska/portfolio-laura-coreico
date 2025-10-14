import DarkModeSwitch from '../DarkModeSwitch';
import './Header.css';

const Header = () => {
        return(
            <>
            <header className="header">
                <div className="logo">
                    <h2 className="titulo">Diseño Multimedial</h2>
                    <p className="subtitulo">IES 9-008 Manuel Belgrano</p>
                </div>
                <nav className="navbar">
                    <a href="#trabajos">Trabajos</a>
                    <a href="#acerca-de">Acerca de</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                <DarkModeSwitch/>
            </header>
            </>
        )
     }   

export default Header;