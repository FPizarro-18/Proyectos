import React from 'react';


/**
 * InputPassword
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string|number} props.e
 * @param {Function} props.x
 */
const InputPass = (props) => {

    

    const escuchador = (evento) => {
        const {value } = evento.target;
        props.x(value);
    }
    
    return (
        <div className="input-password">
            <input
                type="password"
                placeholder="Ingrese contraseña"
                 value={props.e}
                 onChange={escuchador}
            />
        </div>
    );
};

export default InputPass;