import Header from "./componentes/layeut/Header";
import Hero from "./componentes/layeut/Hero";
import Trabajos from  "./componentes/layeut/Trabajos";
import AcercaDe from "./componentes/layeut/Acercade";
function App() {
   return (
    <>  
      <div className="contenedor">
        <Header />
        <Hero />
        <Trabajos />
        <AcercaDe/>
      </div>
    </> 
  )
}

export default App
