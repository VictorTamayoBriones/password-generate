import { ShowFieldStyled } from "./showField.style"
import CopySVG from '../../assets/icons/copy';

interface Props{
  children: string,
  icon?: JSX.Element,
  onClick?: () => void,
  placeholder?: string
}

function ShowField({children, icon=<CopySVG/>, onClick, placeholder }:Props) {

  return (
    <ShowFieldStyled isShowingPlaceholder={children.length === 0} >
      <p>{children.length === 0 ? placeholder : children}</p>
      <div onClick={ ()=> onClick && onClick()} >
        {icon}
      </div>
    </ShowFieldStyled>
  )
}

export default ShowField