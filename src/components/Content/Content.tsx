import { Button } from "../Buttons"
import { LenghtChar } from "../LengthChar"
import { PasswordGenerated } from "../PasswordGenerated"
import { ContentContainer, Title } from "./content.styles"

function Content() {
  return (
    <ContentContainer>
      <Title>Generador de contraseña</Title>   
      <PasswordGenerated/>
      <LenghtChar/>
      <Button>Generar contraseña</Button>  
    </ContentContainer>
  )
}

export default Content