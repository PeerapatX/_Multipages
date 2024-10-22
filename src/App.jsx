import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Todo from "./pages/Todo/Todo.jsx";
import Calaulator from "./pages/Calculator/Calaulator.jsx";
import Components from "./pages/Components/Components.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Carts from "./pages/Carts/Carts.jsx";
import Animation from "./pages/Animation/Animation.jsx";
import Login from "./pages/Login/Login.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import { fetchProducts } from "./data/products";

const intTab = "home";

function App() {
  const [token, setToken] = useState('x')
  const [role, setRole] =useState('')

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [tab, setTab] = useState("");

  useEffect(() => setProducts(fetchProducts()), []);

  useEffect(() => console.log(products), [products]);

  useEffect(() => {
    setTab(intTab);
  }, []);

  if (token === ''){
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else{
  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout
                products={products}
                carts={carts}
                tab={tab}
                setTab={setTab}
                setToken={setToken}
              />
            }
          >
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/Calaulator"} element={<Calaulator />} />
            <Route path={"/Components"} element={<Components />} />
            <Route path={"/Animation"} element={<Animation />} />
            <Route path={"/todo"} element={<Todo />} />
            <Route
              path={"/Products"}
              element={
                <Products
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route
              path={"/Carts"}
              element={<Carts carts={carts} setCarts={setCarts} />}
            />
            
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
}

export default App;
