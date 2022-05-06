import { createContext, useState } from "react";
import type { IBusqueda } from "../types/index";
import axios from "axios";
import { IClima } from "../types/index";

const ClimaContext = createContext<any>({});

interface IChildren {
  children: JSX.Element | JSX.Element[];
}

const ClimaProvider = ({ children }: IChildren) => {
  const [busqueda, setBusqueda] = useState<IBusqueda>({
    ciudad: "",
    pais: "",
  });
  const [resultadoClima, setResultadoClima] = useState<IClima | "">("");
  const [cargando, setCargando] = useState<boolean>(false);
  const [noResultado, setNoResultado] = useState('');

  const datosBusqueda = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda({
      ...busqueda,
      [evento.target.name]: evento.target.value,
    });
  };

  const consultarClima = async (datos: IBusqueda) => {
      setCargando(true);
      setNoResultado('');
    try {
      const { ciudad, pais } = datos;
      const apiKey = import.meta.env.VITE_API_KEY;

      const urlFetchLatitud = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apiKey}`;
      const { data } = await axios(urlFetchLatitud);
      const { lat, lon } = data[0];
      const urlFechClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const { data: clima }: { data: IClima } = await axios(urlFechClima);
      setResultadoClima(clima);
    } catch (error) {
      setNoResultado('No hay resultados');
      setResultadoClima('');
    }finally{
        setCargando(false);
    }
  };
  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultadoClima,
        cargando,
        noResultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;
