import { Button } from "../Buttons"
import { LenghtChar } from "../LengthChar"
import { LevelSecurity } from "../LevelSecurity"
import Options from "../Options/Options"
import { PasswordGenerated } from "../PasswordGenerated"
import { ContentContainer, Title } from "./content.styles"

function Content() {
  return (
    <ContentContainer>
      <Title>Generador de contraseña</Title>   
      <PasswordGenerated/>
      <LenghtChar/>
      <Options/>
      <LevelSecurity/>
      <Button>Generar contraseña</Button>  
    </ContentContainer>
  )
}

export default Content