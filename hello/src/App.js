import './App.css';
import Message from './Components/Message';
import Team from  "./Components/Team";

function App() {
  return (
    <div className='App'>
      <Message name="Daffy Duck" job="engineer" age={32}/>
      <Team name="Liverpool" tittle={5}/>
      <Team name="PSG" tittle={0}/>

    </div>
  );
}

export default App;
