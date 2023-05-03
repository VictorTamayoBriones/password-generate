import { useState } from "react";
import { ShowField } from "../ShowField";
import { Copy } from "@/assets/icons";
import { theme } from "@/theme";
export default function PasswordGenerated() {

  const [passwordGenerated, setPasswordGenerated]=useState<string>('')

  const copyToClipboard = async () =>{
    
    if(passwordGenerated.length > 0){
      await navigator.clipboard.writeText(passwordGenerated)
    }
    
  }

  return (
    <ShowField onClick={()=>copyToClipboard()} placeholder="generate your password" icon={<Copy fill={passwordGenerated.length === 0 ? theme.grey_light : theme.blue_dark} />} >{passwordGenerated}</ShowField>
  )
}
