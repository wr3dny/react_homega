import { Link } from "react-router-dom";
import "./Order.module.css";
export const Order = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Order</h1>
      <div>Or not so ordered oordewr</div>
      <ul>
        <li>
          <Link to="/order/1">Order 1</Link>
        </li>
        <li>
          <Link to="/order/2">Order 2</Link>
        </li>
        <li>
          <Link to="/order/3">Order 3</Link>
        </li>
        <li>
          <Link to="/order/4">Order 4</Link>
        </li>
      </ul>
    </div>
  );
};
