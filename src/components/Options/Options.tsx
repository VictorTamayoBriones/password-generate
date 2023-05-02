import { CheckOption } from "../CheckOption"
import { ContainerOptions } from "./options.style"

function Options() {
  return (
    <ContainerOptions>
        <CheckOption>Incluye letras mayúsculas.</CheckOption>
        <CheckOption>Incluye letras minusculas.</CheckOption>
        <CheckOption>Incluye números.</CheckOption>
        <CheckOption>Incluye símbolos.</CheckOption>
    </ContainerOptions>
  )
}

export default Options