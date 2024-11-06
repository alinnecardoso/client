import { Container } from './styles';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes />
      </Container>

    </BrowserRouter>

  );
}

export default App;