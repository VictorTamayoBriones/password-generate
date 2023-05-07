import { ButtonStyled } from "./button.style"

interface Props{
  children: string,
  bg?: string,
  color?: string,
  width?: string,
  height?: string,
  onClick?: () => void,
  className?: string
}


function Button({children, bg, color, width, height,onClick, className}:Props) {
  return (
    <ButtonStyled 
      onClick={()=> onClick && onClick()}
      bg={bg}
      color={color}
      width={width}
      height={height}
      className={className}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button