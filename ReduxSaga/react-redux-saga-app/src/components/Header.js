import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/">
        <h1>Shopping Mela</h1>
      </Link>

      {/* CENTER SEARCH */}
      <div className="search-box">
        <input type="text" placeholder="Search Product" onChange={(event)=> dispatch(productSearch(event.target.value))} />
      </div>

      {/* CART */}
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
