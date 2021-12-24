import './App.css';
import Main from './components/Main';

function App(props) {

  const greeting = () => {
    return (
      <div>
        <span>Hey there 👋</span>
      </div>
    )
  }

  const renderSmileys = () => {
    return [
      '🙂',
      '😄',
      '😁',
      '😆',
    ]
  }

  return (
    <div className="App">
      <Main 
        header={'Here is my title'} 
        subtitle={"Here is my subtitle"}
        greeting={greeting}
        renderSmileys={renderSmileys}
      >
        <p>Here is some content</p>
      </Main>
    </div>
  );
}

export default App;
