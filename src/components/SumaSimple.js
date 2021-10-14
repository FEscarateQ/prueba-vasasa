import React, { useState } from 'react'

export default function SumaSimple() {
    const [valoresaAgregados, setvaloresaAgregados] = useState([]);
    const [inputValue, setInputValue] = useState(0);
    const [suma, setsuma] = useState(0)



    const handleOnChange = (e) => {
        setInputValue(parseInt(e.target.value) || 0);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(typeof inputValue === 'number' && inputValue !== 0){
            e.target.reset();
            setInputValue(0);
            setvaloresaAgregados((valores) => [ ...valores, parseInt(inputValue) ]);
            setsuma(parseInt(suma) + parseInt(inputValue));
        }
    }

    const handleLimpiar = (e) => {
        setvaloresaAgregados([]);
        setInputValue(0);
        setsuma(0);
    }

    return (
        <>
            <div>
                
                <form onSubmit={handleOnSubmit}>
                    <label>
                        Ingresa valor para sumar: 
                    <input
                        type="number"
                        onInput={(handleOnChange)}
                        input={inputValue}
                        defaultValue={''}
                    />
                    </label>
                    <button type="submit">Agregar</button>
                    <button
                        type="button"
                        onClick={() => handleLimpiar()}
                    >
                        Limpiar
                    </button>
                </form>
                { 
                    valoresaAgregados.length > 0 && 
                    <p>
                        Se han agregado los valores:  
                        {valoresaAgregados.map((valor, idx) => {
                            return idx > 0 ? `- ${valor}` : ` ${valor}`
                        })}
                        <br/>
                        {`La suma total es: ${suma}`}
                    </p>
                }
            </div>
            <hr/>
        </>
    )
}
