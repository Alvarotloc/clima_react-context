import Formulario from './Formulario';
import Resultado from './Resultado';
import useClima from '../hooks/useClima';
import Spinner from './Spinner';
const AppClima = () => {

    const {resultadoClima,cargando,noResultado} = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            {cargando ? <Spinner /> : resultadoClima ? <Resultado /> : noResultado ? <p>{noResultado}</p>  : <p>El clima se va a mostrar aqui</p>}
        </main>
    </>
  )
}

export default AppClima