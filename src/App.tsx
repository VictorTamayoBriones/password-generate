import { Alert } from "./components/Alert"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Main } from "./components/Main"

function App() {

  return (
    <>
      <Alert/>
      <Main>
        <Container>
          <Content/>
        </Container>
      </Main>
    </>
  )
}

export default App
