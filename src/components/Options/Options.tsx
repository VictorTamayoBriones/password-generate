import { CheckOption } from "../CheckOption"
import { ContainerOptions } from "./options.style"

function Options() {
  return (
    <ContainerOptions>
      <CheckOption name="inludeUpperCase" >Incluye letras mayúsculas.</CheckOption>
      <CheckOption name="includeLowerCase" >Incluye letras minusculas.</CheckOption>
      <CheckOption name="includeNumbers" >Incluye números.</CheckOption>
      <CheckOption name="includeSynbols" >Incluye símbolos.</CheckOption>
    </ContainerOptions>
  )
}

export default Options