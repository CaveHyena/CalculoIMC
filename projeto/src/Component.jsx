import React, { useState } from 'react';

const ComponentIMC = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularIMC = (e) => {
        e.preventDefault();
        if (altura > 0) {
            const imc = peso / (altura * altura);
            setResultado(imc.toFixed(2));
        } else {
            setResultado(null);
        }
    };

    {/*se o numero for negativo ira retornar vazio*/}

    return (
        <>
            <form onSubmit={calcularIMC}>
                <input 
                    type="number" 
                    value={altura} 
                    onChange={(e) => setAltura(e.target.value)} 
                    placeholder="altura (m)" 
                    required 
                />
                <input 
                    type="number" 
                    value={peso} 
                    onChange={(e) => setPeso(e.target.value)} 
                    placeholder="peso (kg)" 
                    required 
                />
                <button type="submit">Calcular IMC</button>
            </form>
            {resultado !== null && (
                <p>Seu IMC é: {resultado}</p>
            )} 
            
           {/*if ternatio com condição () ? _ : _, porem se houver apenas uma condição () && _*/}
        </>
    );
}

export default ComponentIMC;
