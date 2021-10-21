import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatHistory from './components/chatHistory';
import Translate from './components/translate';
import Home from './components/home'
import ChatHistoryNestedList from './components/chat'
import Header from './components/header'
import Message from './components/Messages'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Switch>
          <Route path='/messages/:conv_id' component={Message} />
          <Route path = '/home' component={Home}/>
          <Route path = '/chat-history' component={ChatHistory}/>
          <Route path = '/translate' component={Translate}/>
          <Route path = '/chat-history-list' component={ChatHistoryNestedList}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
