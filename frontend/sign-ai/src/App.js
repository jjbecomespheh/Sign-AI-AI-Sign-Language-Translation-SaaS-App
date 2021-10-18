import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatHistory from './components/chatHistory';
import Translate from './components/translate';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/history' component={ChatHistory}/>
          <Route path = '/translate' component={Translate}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
