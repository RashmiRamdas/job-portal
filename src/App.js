import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import EmployeeProfile from "./components/employeeProfile/EmployeeProfile";
import EmployerProfile from "./components/employerProfile/EmployerProfile";
import { GlobalContextProvider } from "./components/context/useGlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/employeeProfile">
              <EmployeeProfile />
            </Route>
            <Route path="/employerProfile">
              <EmployerProfile />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
