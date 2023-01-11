/**
 * * Ejemplo de uso de:
 * * - UseState()
 * * - UseRef()
 * * - UseEffect()
 * ! Recuerda que los hook hay que importarlos !
 *  */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo02 = () => {
    // Crearemos dos contadores distintos
    // Cada uno en un estado diferente

    const [ contador1, setContador1 ] = useState(0);
    const [ contador2, setContador2 ] = useState(0);

    // Creamos una referencia con UseRef para asociar una variable 
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1 () {
        setContador1(contador1 + 1);
    }
    function incrementar2 () {
        setContador2(contador2 + 1);
    }
    /**
    * * Trabajando con UseEffect *********
    */

    /**
     * ? Caso 1: Ejecutar siempre un Snippet de codigo
     * Cada vez que se haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */
    // useEffect(() => {
    //     console.log('Cambio del estado del componente');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // })
    /**
     * ? Caso 2: Ejecutar solo cuando se cambie el contador 1
     * Cada vez que se haya un cambio en el estado del componente contador 1
     * se ejecuta aquello que esté dentro del useEffect()
     */
    useEffect(() => {
        console.log('Cambio del estado del componente');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
    },[contador1]);

    return (
        <div>
            <h3>*** Ejemplo de useState(), useRef() y useEffect *** </h3>
            <h4>Contador01: { contador1 }</h4>
            <h4>Contador02: { contador2 }</h4>
            {/*Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Bloque de botones para cambiar los contadores*/ }
            <button onClick={ incrementar1 }>Incrementar contador 1</button>
            <button onClick={ incrementar2 }>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo02;
