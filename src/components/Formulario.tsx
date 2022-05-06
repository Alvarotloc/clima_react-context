import { FormEvent, useState } from 'react';
import useClima from '../hooks/useClima';


const Formulario = ():JSX.Element => {
    const [alerta, setAlerta] = useState('');
    const {busqueda,datosBusqueda,consultarClima}  = useClima();
    const {ciudad,pais} = busqueda;

    const handleSubmit = (evento:FormEvent) => {
        evento.preventDefault();

        if(Object.values(busqueda).includes('')){
            return setAlerta('Todos los campos son obligatorios')
        }
        consultarClima(busqueda);
    }

  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" id="ciudad" name="ciudad" placeholder="Ingrese Ciudad" value={ciudad} onChange={datosBusqueda}/>
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
                        <option value="">-- Seleccione un Pais --</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />
            </fieldset>
        </form>
    </div>
  )
}

export default Formulario