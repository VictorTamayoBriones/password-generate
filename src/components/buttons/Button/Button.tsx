import { ButtonStyled } from "./button.style"

interface Props{
    children: string,
    bg?: string,
    color?: string,
    width?: string,
    height?: string,
    onClick?: () => void
}


function Button({children, bg, color, width, height,onClick}:Props) {
  return (
    <ButtonStyled 
        onClick={()=> onClick && onClick()}
        bg={bg}
        color={color}
        width={width}
        height={height}
    >
        {children}
    </ButtonStyled>
  )
}

export default Button