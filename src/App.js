import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="https://ignatmaldive.github.io/react_panel_bsv/">
            <Home />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/users">
            <UserList />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/user/:userId">
            <User />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/newUser">
            <NewUser />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/products">
            <ProductList />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/product/:productId">
            <Product />
          </Route>
          <Route path="https://ignatmaldive.github.io/react_panel_bsv/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
