import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from './components/Calendar.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Calendar />
      </Container>
    </div>
  );
}

export default App;
