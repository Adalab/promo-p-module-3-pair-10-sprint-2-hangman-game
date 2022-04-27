// Queremos mover a un componente la vista o interfaz del juego, es decir, el HTML, cuya única responsabilidad es pintar los datos bien para que los vea la usuaria.

const Dummy = (props) => {
  return (
    // antes teníamos ${getNumberOfErrors()} porq queríamos el return de la función de App, ahora lo pasamos por prop
    <section className={`dummy error-${props.numberOfErrors}`}>
      <span className='error-13 eye'></span>
      <span className='error-12 eye'></span>
      <span className='error-11 line'></span>
      <span className='error-10 line'></span>
      <span className='error-9  line'></span>
      <span className='error-8  line'></span>
      <span className='error-7  line'></span>
      <span className='error-6  head'></span>
      <span className='error-5  line'></span>
      <span className='error-4  line'></span>
      <span className='error-3  line'></span>
      <span className='error-2  line'></span>
      <span className='error-1  line'></span>
    </section>
  );
};

export default Dummy;
