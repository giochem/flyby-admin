import { Link } from "react-router-dom";
import { paths } from "../../../config/routes";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <Link to={paths.account}>Account</Link>
      <Link to={paths.tour}>Tour</Link>
      <Link to={paths.order}>Order</Link>
      <Link to={paths.login}>Login</Link>
    </div>
  );
}
