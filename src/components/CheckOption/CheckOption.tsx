import { CheckSquare } from "@/assets/icons"
import { Square } from "@/assets/icons"
import { CheckOptionStyled } from "./checkOption.style"
import { useState } from "react"

interface Props{
    children: string
}

function CheckOption({children}:Props) {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = ()=> setIsChecked(!isChecked)

  return (
    <CheckOptionStyled onClick={ ()=> handleCheck() } >
      {
        !isChecked ?
        <Square/> 
        : <CheckSquare/>
      }
      <p>{children}</p>
    </CheckOptionStyled>
  )
}

export default CheckOption