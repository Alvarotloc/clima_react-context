import { useContext } from "react"
import ClimaContext from '../context/ClimaProvider';

const useClima = ():JSX.Element => {

  return useContext(ClimaContext);
}

export default useClima