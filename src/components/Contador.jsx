import { useState } from "react";

const Contador = () => {
    // let numero = 1;

    // Mis estados pueden ser todo pero menos una funcion
    const [numero, setNumero] = useState(1);
    console.log(numero);

    const aumentarNumero = () => {
        console.log("Estoy dentro de la Funcion Aumentar Numero")
        setNumero(numero + 1)
    }

    return (
        <div>
            {console.log("Estoy dentro de el JSX")}
            Contador {numero}
            <button onClick={aumentarNumero}>Click</button>
        </div>
    )
}

export default Contador;