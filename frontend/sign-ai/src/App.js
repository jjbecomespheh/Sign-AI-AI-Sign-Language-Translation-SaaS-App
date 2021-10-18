import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './components/translate';
import Chat from './components/chat'
import Header from './components/header'



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path = '/translate' component={Translate}/>
          <Route path = '/chat' component={Chat}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
