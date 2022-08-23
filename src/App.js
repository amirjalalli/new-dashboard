import "./App.css";
import { routes, route, useRoutes } from "react-router-dom";
import rout from "./rout";
import "./fonts/fonts.css";
import Sidebar from "./component/Sidbar/Sidbar";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Factory from "./Pages/Factory";

function App() {
  const routes = useRoutes(rout);
  return (
    <div className="App">
      <div className="content-app">
        <div className="sidbar-content">
          <Sidebar />
        </div>
        <div className="main-and-header">
          <Header />
          <Factory />
          {/* {routes} */}
        </div>
      </div>
    </div>
  );
}

export default App;
