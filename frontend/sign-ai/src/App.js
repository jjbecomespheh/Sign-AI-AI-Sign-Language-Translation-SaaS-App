import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatHistory from './components/chatHistory';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/history' component={ChatHistory}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
