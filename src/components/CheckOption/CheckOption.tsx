import { CheckSquare } from "@/assets/icons"
import { Square } from "@/assets/icons"
import { CheckOptionStyled } from "./checkOption.style"

interface Props{
    children: string
}

function CheckOption({children}:Props) {
  return (
    <CheckOptionStyled>
        <Square/>
        <p>{children}</p>
    </CheckOptionStyled>
  )
}

export default CheckOption