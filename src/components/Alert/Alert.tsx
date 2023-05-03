import { Check } from "@/assets/icons"
import { AlertStyled } from "./alert.style"

interface Props{
    textMessage?: string
}

function Alert({ textMessage = 'Contraseña copiada al portapapeles.' }:Props) {
  return (
    <AlertStyled>
        <Check/>
        <p>{textMessage}</p>
    </AlertStyled>
  )
}

export default Alert