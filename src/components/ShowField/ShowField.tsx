import { ShowFieldStyled } from "./showField.style"
import CopySVG from '../../assets/icons/copy';


interface Props{
  children: string,
  icon: JSX.Element 
}

function ShowField({children, icon=<CopySVG/>}:Props) {
  
  const Icon = icon;

  return (
    <ShowFieldStyled>
      <p>{children}</p>
      {Icon}
    </ShowFieldStyled>
  )
}

export default ShowField