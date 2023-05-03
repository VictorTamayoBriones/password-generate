import { CheckSquare } from "@/assets/icons"
import { Square } from "@/assets/icons"
import { CheckOptionStyled } from "./checkOption.style"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addOption, removeOption } from "@/redux/states/options.slice"

interface Props{
  children: string,
  name: string
}

function CheckOption({children, name}:Props) {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const dispatch = useDispatch()

  const handleCheck = ()=>{
    if(isChecked){
      setIsChecked(false)
      dispatch(removeOption(name))
    }else{
      setIsChecked(true)
      dispatch(addOption(name))
    }
  }

  return (
    <CheckOptionStyled  onClick={ ()=> handleCheck() } >
      {
        !isChecked ?
        <Square/> 
        : 
        <CheckSquare/>
      }
      <p>{children}</p>
    </CheckOptionStyled>
  )
}

export default CheckOption