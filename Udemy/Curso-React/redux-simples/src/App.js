import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div>
        <Card title="Card 1" red>X</Card>
      </div>
    </div>
  );
}

export default App;
