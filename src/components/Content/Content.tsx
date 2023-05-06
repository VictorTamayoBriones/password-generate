import { useSelector } from "react-redux"
import { Button } from "../Buttons"
import { LenghtChar } from "../LengthChar"
import { LevelSecurity } from "../LevelSecurity"
import Options from "../Options/Options"
import { PasswordGenerated } from "../PasswordGenerated"
import { ContentContainer, Title } from "./content.styles"
import { AppStore } from '../../redux/store';
import BtnGeneratePassword from "../BtnGeneratePassword/BtnGeneratePassword"

function Content() {

  const options = useSelector((store:AppStore)=>store.options)
  
  return (
    <ContentContainer>
      <Title>Generador de contraseña</Title>   
      <PasswordGenerated/>
      <LenghtChar/>
      <Options/>
      <LevelSecurity/>
      <BtnGeneratePassword/>
    </ContentContainer>
  )
}

export default Content