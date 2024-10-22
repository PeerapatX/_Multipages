import { Link } from "react-router-dom";
import "./Navber.css";

function Navber({ tab, setTab, products, carts, setToken }) {
  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("home");
          }}
        >
          Home
        </button>
      </Link>

      <Link to={"/Calaulator"}>
        <button
          className={
            "btn " +
            (tab === "Calaulator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("Calaulator");
          }}
        >
          Calaulator
        </button>
      </Link>

      <Link to={"/Components"}>
        <button
          className={
            "btn " +
            (tab === "Components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("Components");
          }}
        >
          Components
        </button>
      </Link>

      <Link to={"/Animation"}>
        <button
          className={
            "btn " +
            (tab === "Animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("Animation");
          }}
        >
          Animation
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("todo");
          }}
        >
          Todo
        </button>
      </Link>

      <Link to={"/Products"}>
        <button
          className={
            "btn " +
            (tab === "Products" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("Products");
          }}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to={"/Carts"}>
        <button
          className={
            "position-relative btn " +
            (tab === "Carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("Carts");
          }}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>
      <button
        className="btn btn-outline-danger"
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navber;
