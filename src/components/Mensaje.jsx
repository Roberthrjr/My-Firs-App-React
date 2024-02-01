// Ya no es necesario importar React en componentes
// Solo cuando se utiliza React Native

const Mensaje = (props) => {
    console.log("PROPS: ", props);
    return (
        // Las llaves vacias se conocen como Fragment, funciona como contenedor que no se renderiza
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium iure, voluptatum facilis eum dolorem obcaecati earum et, nam excepturi debitis est eligendi. Cumque molestiae delectus sapiente placeat nemo nostrum?
            </p>
        </>
    )
}

export default Mensaje;