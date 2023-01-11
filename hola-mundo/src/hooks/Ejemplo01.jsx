/* NotaS:  
* Ejemplo de uso del Hook userState
*
* Crear un componente de tipo función y acceder a su estado
* a través de un hook y, además, poder modificarlo
*/
/* NotaS:  rfc para snipet de reactFuntion */
import React, { useState } from 'react';

const Ejemplo01 = () => {
    // Valor para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: "Jose",
        email: "lestrades@gmail.com",
    }
    /*
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambio] = userState (valorInicial)
     */
    const [ contador, setContador ] = useState(valorInicial);
    const [ persona, setPersona ] = useState(personaInicial);

    // Función para actualizar el estado privado que contiene el contador
    function incrementarContador () {

        setContador(contador + 1);
    }
    //Función para actualizar la persona
    function actualizarPersona () {

        setPersona(
            {
                nombre: "Martín",
                email: "Martin@gmail.com"
            }
        )
    }

    return (
        <div>
            <h3>*** Ejemplo de useState() *** </h3>
            <h4>Contador: {contador}</h4>
            <h4>Datos de la persona</h4>
            <p>Nombre: { persona.nombre }. / Email: { persona.email }</p>
            {/* Bloque de botones para actualizar el estado del componente*/}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo01;
