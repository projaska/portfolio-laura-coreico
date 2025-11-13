import './AcercaDe.css';
const AcercaDe =  () => {
    return(
        <>
            <section className="acerca-de" id="acerca-de"> 
                <div className="grid">
                    <div className="col-1">
                        <div className="fotos">
                            <img src="./ASSEST/TRABAJOS/FOTO1.jpg" className="foto" alt="Lo que me representa" />
                            <img src="./ASSEST/TRABAJOS/FOTO2.jpg" className="foto" alt="Mis hobbies" />
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className="pre-titulo">Acerca de mí</h4>
                        <h3 className="titulo">La razon por la que deberias aprobarme</h3>
                        <p className="resumen">
                            Hola soy Laura Coreico, una apasionada diseñadora dedicada a convertir ideas en realidad. Con un enfoque creativo y minucioso, transformo proyectos en experiencias únicas.
                        </p><p className="resumen">
                             Considero que deberían aprobarme porque en cada trabajo pude plasmar una interpretación personal y consciente de las consignas. No me limité a cumplir con lo técnico, sino que busqué transmitir una idea o una emoción a través de la imagen y explorar el uso de distintas herramientas digitales, combinando procesos manuales y digitales para enriquecer el resultado visual. Cada ejercicio me permitió reflexionar sobre la relación entre palabra, concepto y forma, y cómo estos elementos pueden convivir para contar algo más profundo. Siento que logré mantener coherencia estética, intención narrativa y una mirada crítica, mostrando que detrás de cada pieza hubo un proceso de pensamiento y no solo una ejecución.
                        </p>
                        <a href="#contacto" className="boton">
                            Mandame un mensaje
                            <span className="icono">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div> 
            </section>
        </>
    )
}
export default AcercaDe;