import React from 'react';
/**
 * InputEmail
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const InputText = (props) => {
    const { value, onChange } = props;

    const escuchador = (evento) => {
        const {value } = evento.target;
        onChange(value);
    }
    return (
        <div className="input-text">
            <input
                placeholder="Ingrese su texto"
                value= {props.value}
                onChange={escuchador}
            />
        </div>
    );
};
export default InputText;