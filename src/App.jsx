import Header from "./componentes/layeut/Header";
import Hero from "./componentes/layeut/Hero";
import Trabajos from  "./componentes/layeut/Trabajos";
import AcercaDe from "./componentes/layeut/AcercaDe";
import Contacto from "./componentes/layeut/Contacto";
import Footer from "./componentes/layeut/Footer";

function App() {
   return (
    <>  
      <div className="contenedor">
        <Header />
        <Hero />
        <Trabajos />
        <AcercaDe/>
        <Contacto/>
        <Footer/>
      </div>
    </> 
  )
}

export default App
