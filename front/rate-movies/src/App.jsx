import { GlobalStyle, Container } from './styles/global';
import Header from './components/Header';
import Main from './components/Main';


function App() {
 

  return (
   <>
    <Header/>
    <Container>
      <Main/>
    </Container>
    <GlobalStyle/>
   </>
  );
}

export default App;
