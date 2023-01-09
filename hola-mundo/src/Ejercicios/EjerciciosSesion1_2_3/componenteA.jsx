import React from 'react'
import ContactoComp from './componenteB'
import { Contacto } from './contacto.class'

const ComponenteA = () => {
    const contacto = new Contacto('Jose', 'Luis', 'lestrades@gmail.com', false)
    return (
        <div>
            <h1>Tu contacto:</h1>
            <ContactoComp contacto={ contacto }></ContactoComp>
        </div>
    )
}

export default ComponenteA;



