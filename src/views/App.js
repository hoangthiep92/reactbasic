import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          first react
        </p>
       
        <MyComponent/>
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
