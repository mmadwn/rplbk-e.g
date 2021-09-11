import './App.css';
import { BrowserRouter, Link, Route, Switch  } from "react-router-dom";
import Usecontext from "./Usecontext/Context";
import Useeffect from "./Useeffect/Effect";
import Usestate from "./Usestate/State";

export default function App() {
  return (
    <BrowserRouter>
    <header>
      <div className="tittle">
        <p>Kelompok 37</p>
      </div>
    <nav>
      <Link className="text" to="/">
        useState
      </Link>
      <Link className="text navtext2" to="/effect">
        useEffect
      </Link>
      <Link className="text" to="/context">
        useContext
      </Link>
    </nav>
    </header>
    <Switch>
      <Route path="/" exact component={Usestate}/>
      <Route path="/effect" component={Useeffect}/>
      <Route path="/context" component={Usecontext}/>
    </Switch>
    </BrowserRouter>
  );
}


