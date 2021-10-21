import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatHistory from './components/chatHistory';
import Translate from './components/translate';
import Welcpme from './components/welcome'
import ChatHistoryNestedList from './components/chat'
import Header from './components/header'
import Consent from './components/consent'
import Tutorial from './components/tutorial'
// import Welcome from './components/welcome';
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Switch>
          <Route path = '/home' component={Home}/>
          <Route path = '/consent' component={Consent}/>
          <Route path = '/tutorial' component={Tutorial}/>
          <Route path = '/chat-history' component={ChatHistory}/>
          <Route path = '/translate' component={Translate}/>
          <Route path = '/chat-history-list' component={ChatHistoryNestedList}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
