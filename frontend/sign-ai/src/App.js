import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatHistory from './components/chatHistory';
import Translate from './components/translate';
import ChatHistory from './components/chat'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <AppBar/>
      
      <BrowserRouter>
        <Switch>
          <Route path = '/history' component={ChatHistory}/>
          <Route path = '/translate' component={Translate}/>
          <Route path = '/chat-history' component={ChatHistory}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
