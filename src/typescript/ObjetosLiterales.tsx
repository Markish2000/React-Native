interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: string;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Marcos',
    edad: 22,
    direccion: {
      pais: 'Argentina',
      casaNo: 'Buenos Aires',
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <code>{JSON.stringify(persona, null, 2)}</code>
    </>
  );
};
export default ObjetosLiterales;
