import logo from './logo.svg';
import './App.css';
import './header.js';



const Random = (props) => {
  return (
    <h1>name is {props.name}</h1>
  )
}



function App() {
  return (
    <>
      <Random name="arbinda" />
      <Random name="reyone" />
    </>
  );
}

export default App;
