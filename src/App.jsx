import Header from "./componentes/layeut/Header";
import Hero from "./componentes/layeut/Hero";
import Trabajos from  "./componentes/layeut/Trabajos";
import AcercaDe from "./componentes/layeut/AcercaDe";
import Contacto from "./componentes/layeut/Contacto";

function App() {
   return (
    <>  
      <div className="contenedor">
        <Header />
        <Hero />
        <Trabajos />
        <AcercaDe/>
        <Contacto/>
      </div>
    </> 
  )
}

export default App
