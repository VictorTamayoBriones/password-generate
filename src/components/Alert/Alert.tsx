import { Check } from "@/assets/icons"
import { AlertStyled } from "./alert.style"
import { useSelector } from "react-redux"
import { AppStore } from '../../redux/store';

interface Props{
  textMessage?: string
}

function Alert({ textMessage = 'Contraseña copiada al portapapeles.' }:Props) {
  
  const { isShowing } = useSelector((store: AppStore)=>store.alert)
  
  return (
    <>
      {
        isShowing &&
        <AlertStyled>
          <Check/>
          <p>{textMessage}</p>
        </AlertStyled>
      }
    </>
  )
}

export default Alert