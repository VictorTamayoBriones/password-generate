import { useEffect, useState } from "react";
import { ShowField } from "../../components/ShowField";
import { Copy } from "@/assets/icons";
import { theme } from "@/theme";
import { useDispatch } from "react-redux";
import { handleAlert } from "@/redux/states/alert.slice";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export default function PasswordGenerated() {

  const [password, setPassword]=useState<string>('')

  const { passwordGenerated } = useSelector((store:AppStore)=>store.passwordGenerated)

  const dispatch = useDispatch()

  useEffect(()=>{

    if(passwordGenerated.length > 0){
      setPassword(passwordGenerated)
    }

  }, [passwordGenerated])

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
    <ShowField onClick={()=>copyToClipboard()} placeholder="generate your password" icon={<Copy fill={password.length === 0 ? theme.grey_light : theme.blue_dark} />} >{password}</ShowField>
  )
}
