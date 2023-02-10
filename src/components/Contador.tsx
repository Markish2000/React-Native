import { useState } from 'react';

const Contador = () => {
  const [valor, setValor] = useState(0);
  const acumulador = (numero: number) => {
    setValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador <small>{valor}</small>
      </h3>
      <button className='btn btn-primary' onClick={() => acumulador(1)}>
        +1
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={() => acumulador(-1)}>
        -1
      </button>
    </>
  );
};
export default Contador;
