import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './components/translate';
import ChatHistoryNestedList from './components/chat'
import Header from './components/header'
import Message from './components/Messages'
import Consent from './components/consent'
import Tutorial from './components/tutorial'
import Home from './components/Home'
import CoverPage from './components/CoverPage'


function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Switch>
          <Route path='/messages/:index/:conv_id' component={Message} />
          <Route path = '/cover-page' component={CoverPage}/>
          {/* <Route path='/' component={Home} /> */}
          <Route path='/home' component={Home} />
          <Route path = '/consent' component={Consent}/>
          <Route path = '/tutorial' component={Tutorial}/>
          <Route path = '/translate' component={Translate}/>
          <Route path = '/chat-history' component={ChatHistoryNestedList}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
