import { Button } from "../Buttons"
import { ShowField } from "../ShowField"
import { ContentContainer, Title } from "./content.styles"

function Content() {
  return (
    <ContentContainer>
      <Title>Generador de contraseña</Title>   
      <ShowField/>
      <Button>Generar contraseña</Button>  
    </ContentContainer>
  )
}

export default Content