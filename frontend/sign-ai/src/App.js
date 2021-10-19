import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './components/translate';
import AppBar from './components/appBar';



function App() {
  return (
    <div className="App">
      <AppBar/>
      
      <BrowserRouter>
        <Switch>
          <Route path = '/translate' component={Translate}/>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
