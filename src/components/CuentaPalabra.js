import React, {useState, useEffect} from 'react'

const contarPalabras = (text) => {
    return text.trim().split(' ').length
}

const contarVocales = (text) => {
    return text.match(/[aeiouáéíóú]/gi) ? text.match(/[aeiouáéíóú]/gi).length : 0;
}

const contarConsonantes = (text) => {
    return text.match(/[^aeiouáéíóú ]/gi) ? text.match(/[^aeiouáéíóú ]/gi).length : 0;
}

export const CuentaPalabra = () => {
    const [inputValue, setinputValue] = useState('')
    const [cantidadPalabras, setcantidadPalabras] = useState(0)
    const [cantidadVocales, setcantidadVocales] = useState(0)
    const [cantidadConsonantes, setcantidadConsonantes] = useState(0)

    
    useEffect(() => {
        inputValue.length > 0 ?  setcantidadPalabras(contarPalabras(inputValue))
                              : setcantidadPalabras(0)

        setcantidadVocales(contarVocales(inputValue))
        setcantidadConsonantes(contarConsonantes(inputValue))

    }, [inputValue])


    const handleOnInput = (e) => {
        setinputValue(e.target.value.trim());
    }
    

    return (
        <>
            <div>
                <form>
                <label>
                    Ingresa cadena de texto a analizar: 
                    <input
                        type="text"
                        onInput={handleOnInput}
                        input={''}
                    />
                    </label>
                    <p>{`Cantidad de palabras: ${cantidadPalabras}`}</p>
                    <p>{`Cantidad de vocales: ${cantidadVocales}`}</p>
                    <p>{`Cantidad de consonantes: ${cantidadConsonantes}`}</p>
                </form>
            </div>
            <hr/>
        </>
    )
}
