import { ButtonStyled } from "./button.style"

interface Props{
    text: string,
    bg?: string,
    color?: string,
    width?: string,
    height?: string,
    onClick?: () => void
}


function Button({text, bg, color, width, height,onClick}:Props) {
  return (
    <ButtonStyled 
        onClick={()=>onClick}
        bg={bg}
        color={color}
        width={width}
        height={height}
    >
        {text}
    </ButtonStyled>
  )
}

export default Button