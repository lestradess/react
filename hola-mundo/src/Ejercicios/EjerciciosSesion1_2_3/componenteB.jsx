
import React from "react";
import PropTypes from 'prop-types';
import { Contacto } from "./contacto.class";

const ContactoComp = ({ contacto }) => {
    return (
        <div>
            <h1>Tu contacto</h1>
            <h3>Nombre : { contacto.nombre }</h3>
            <h3>Apellido : { contacto.apellido }</h3>
            <h3>Email: { contacto.email }</h3>
            <h3>Estado: { contacto.conectado ? 'Conectado' : 'Desconectado' }</h3>
        </div>
    )

}
ContactoComp.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComp;