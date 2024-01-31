import { BsSearch} from "react-icons/bs";
import { Link} from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import css from "../components/Header.module.css";
import { useSelector } from "react-redux";


const Header = () =>{
  const cart = useSelector(store => store.cart)

  return <header>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className={css.containernav}>
    <Link className={css.navBar_brand} to="/">TREN-DY</Link>
      <ul className="navbar-nav">
        <li className={`nav-item ${css.item_font}`}>
          <Link className="nav-link" aria-current="page" to="/men">Men</Link>
        </li>
        <li className={`nav-item ${css.item_font}`}>
          <a className="nav-link" aria-current="page" href="#">Women</a>
        </li>
        <li className={`nav-item ${css.item_font}`}>
          <a className="nav-link" aria-current="page" href="#">Kids</a>
        </li>
      </ul>
      <div className={css.search_bar}>
      <input type="text" className={css.search_input} placeholder="Search for Clothes..."/>
      <button className={css.Searchicon}><BsSearch size={20}/></button>
    </div>
      <div>
        <Link activeclassname={css.active} to="/wishlist" style={{textDecoration:"none"}}>
          <div className={css.action_container}>
          <FaRegHeart size={24}/>
            <span className={css.action_name}>wishlist</span>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/cart" style={{textDecoration:"none"}}>
          <div className= {`${css.action_container} ${css.cart_position}`}>
          <FaCartArrowDown size={24}/>
            <span className={css.action_name}>Cart</span>
            <span className={css.cart_item_count}>{cart.length}</span>
          </div>
        </Link>
      </div>
      <div className={css.account_container}>
        <div>
        <a href="" style={{textDecoration:"none"}}>
          <div className={css.action_container}>
          <MdLogin size={24} />
            <span className={css.action_name}>Login</span>
          </div>
        </a>
      </div>
      <div>
        <a href="" style={{textDecoration:"none"}}>
          <div className={css.action_container}>
          <IoPersonAdd size={24} />
            <span className={css.action_name}>Sign up</span>
          </div>
        </a>
      </div>
      </div>

      </div>
</nav>
</header>
}

export default Header;