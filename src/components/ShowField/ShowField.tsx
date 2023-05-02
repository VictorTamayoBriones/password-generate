import { ShowFieldStyled } from "./showField.style"
import CopySVG from '../../assets/icons/copy';

interface Props{
  children: string
}

function ShowField({children}:Props) {
  return (
    <ShowFieldStyled>
      {children}
      <CopySVG/>
    </ShowFieldStyled>
  )
}

export default ShowField