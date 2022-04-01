import logo from './../logo.svg';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.howtographql.com/basics/2-core-concepts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL !!!
        </a>
      </header>
    </div>
  );
}

export default App;
