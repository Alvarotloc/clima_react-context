import { createContext, useState } from 'react';
import type { IBusqueda } from '../types/index';

const ClimaContext = createContext<any>({});

interface IChildren  {
    children : JSX.Element | JSX.Element[]
}

const ClimaProvider = ({children}:IChildren) => {
const [busqueda, setBusqueda] = useState<IBusqueda>({
    ciudad : '',
    pais : ''
});

const datosBusqueda = (evento:any) => {
    setBusqueda({
        ...busqueda,
        [evento.target.name] : evento.target.value
    })
}
    return (<ClimaContext.Provider value={{
        busqueda,
        datosBusqueda
    }}>
        {children}
    </ClimaContext.Provider>)
}

export {
    ClimaProvider
}


export default ClimaContext