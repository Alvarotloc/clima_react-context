import useClima from '../hooks/useClima';
const Resultado = ():JSX.Element => {
    const {resultadoClima} = useClima();
    const {name,main} = resultadoClima;
    const {temp,temp_max,temp_min} = main;

    // Grados Kelvin
    const kelvin = 273.15
  return (
    <div className='contenedor clima'>
        <h2>El Clima de {name} es:</h2>
        <p>
            {Math.trunc(temp - kelvin)} <span>&#x2103;</span>
        </p>
        <div className='temp_min_max'>
        <p>
            Mín: {Math.trunc(temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Máx: {Math.trunc(temp_max - kelvin)} <span>&#x2103;</span>
        </p>
        </div>
    </div>
  )
}

export default Resultado