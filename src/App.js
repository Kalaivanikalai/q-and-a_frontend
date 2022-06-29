import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Question from './component/Add-Question/Question';
import ViewQuestion from './component/ViewQuestion';
import StackOverflow from './component/StackOverflow';
import Auth from './component/Auth';



function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={StackOverflow} />
          <Route exact path="/add-question" component={Question} />
          <Route exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
