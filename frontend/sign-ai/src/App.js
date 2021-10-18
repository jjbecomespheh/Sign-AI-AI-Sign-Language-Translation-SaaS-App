import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './components/translate';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/translate' component={Translate}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
