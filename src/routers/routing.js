import { Link, Route, Switch } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";
import Home from "../components/Home";
import ShowAccount from "../components/ShowAccount";
import 'bootstrap/dist/css/bootstrap.min.css';

export const routing = (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/createaccount">
                CreateAccount
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/showaccount">
                ShowAccount
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/showaccount" component={ShowAccount} />
      <Route path="/home" component={Home} />
    </Switch>
  </>
);