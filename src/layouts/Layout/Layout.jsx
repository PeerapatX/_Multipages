import { Outlet } from "react-router";

import Header from "../Header/Header";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

import "./Layout.css";

function Layout({ tab, setTab, products, carts, setToken }) {
  return (
    <div>
      <Header />
      <Navber tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
