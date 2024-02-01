import "./App.css";
import Contador from "./components/Contador";

// Cuando importamos algo de JS o JSX no es necesario agregarlo la extension
import Mensaje from "./components/Mensaje";

// El nombre de la función que representa al componente tiene que estar en mayusculas
function App() {

  const titulo = 'Mi primera App';

  // Esta funcion / componente tiene que retornar solo un elemento JSX
  return (
    <>
      <h1>{titulo}</h1>
      <section>
        <h2 className="red">Holaaa</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dignissimos, beatae aliquid cupiditate nemo blanditiis iusto modi aut reprehenderit nam impedit debitis voluptas eum repudiandae ullam reiciendis ad quaerat rerum. Resultado: {2 + 2}
        </p>
        <div>
          <label htmlFor="idNombre">Nombre: </label>
          <input type="text" id="idNombre" />
        </div>
      </section>
      {/* Toda etiqueta debe estar cerrada con su etiqueta correspondiente */}
      <hr />
      {/* Props */}
      <Mensaje propsTitulo={titulo} numero="1" />
      <Contador />
    </>
  )

}

// Exportar la función
export default App;