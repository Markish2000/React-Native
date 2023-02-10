const TiposBasicos = () => {
  const nombre: string = 'Marcos';
  const edad: number = 22;
  const estaActivo: boolean = false;
  const poderes: string[] = [];
  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'Activo' : 'Inactivo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
export default TiposBasicos;
