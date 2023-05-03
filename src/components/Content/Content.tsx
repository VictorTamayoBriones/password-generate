import { useSelector } from "react-redux"
import { Button } from "../Buttons"
import { LenghtChar } from "../LengthChar"
import { LevelSecurity } from "../LevelSecurity"
import Options from "../Options/Options"
import { PasswordGenerated } from "../PasswordGenerated"
import { ContentContainer, Title } from "./content.styles"
import { AppStore } from '../../redux/store';

function Content() {

  const options = useSelector((store:AppStore)=>store.options)
  
  return (
    <ContentContainer>
      <Title>Generador de contraseña</Title>   
      <PasswordGenerated/>
      <LenghtChar/>
      <Options/>
      <LevelSecurity/>
      <Button onClick={()=>console.log(options)} >Generar contraseña</Button>  
    </ContentContainer>
  )
}

export default Content