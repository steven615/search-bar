import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReorderIcon from '@material-ui/icons/Reorder';

import SearchForm from '../SearchForm';

import './index.scss';
const Header = (props) => {

  return (
    <div>
      {/* Desktop header */}
      <div className="header">
        <div className="sub-header">
          <div><a href="#">test@gmail.com</a></div>
          <div class="center">Free shipping for all orders of $150+</div>
          <ul class="nav-menu">
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Blog</a></li>
            
          </ul>
        </div>

        <div className="main-header">
          <div className="wishlist">
            <FavoriteBorderIcon />
            <span>Wishlist</span>
          </div>

          <div className="nav-menu">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
            <div className="brand">TEST</div>
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <SearchForm
              onSearch={props.onSearch}
              onCancelSearch={props.onCancelSearch} />
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="mobile-header">
        <div className="brand">Test</div>
        <div className="controls">
          <SearchForm
            onSearch={props.onSearch}
            onCancelSearch={props.onCancelSearch} />
          <div><button><ReorderIcon /></button></div>
        </div>
      </div>
    </div>
  );
};

export default Header;