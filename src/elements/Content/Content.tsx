import { LenghtChar } from "../LengthChar"
import { LevelSecurity } from "../LevelSecurity"
import Options from "../Options/Options"
import { PasswordGenerated } from "../PasswordGenerated"
import { ContentContainer, Title } from "./content.styles"
import BtnGeneratePassword from "../BtnGeneratePassword/BtnGeneratePassword"

function Content() {

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