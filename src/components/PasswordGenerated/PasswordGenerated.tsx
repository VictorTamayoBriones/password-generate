import { useState } from "react";
import { ShowField } from "../ShowField";
import { Copy } from "@/assets/icons";
import { theme } from "@/theme";
import { useDispatch } from "react-redux";
import { handleAlert } from "@/redux/states/Alert.slice";
export default function PasswordGenerated() {

  const [passwordGenerated, setPasswordGenerated]=useState<string>('')

  const dispatch = useDispatch()

  const copyToClipboard = async () =>{
    
    if(passwordGenerated.length > 0){
      await navigator.clipboard.writeText(passwordGenerated)
      dispatch(handleAlert(true))
      setTimeout(()=>{
        dispatch(handleAlert(false))
      }, 4000)
    }

  }

  return (
    <ShowField onClick={()=>copyToClipboard()} placeholder="generate your password" icon={<Copy fill={passwordGenerated.length === 0 ? theme.grey_light : theme.blue_dark} />} >{passwordGenerated}</ShowField>
  )
}
