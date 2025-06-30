import "../../styles/style.scss";
import Logo from "./Logo";
import like from '../../assets/icons/basket_like.svg';
import card from '../../assets/icons/basket_card_empty.svg';
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__mode">
            <ModeToggle />
          </div>
        </div> 

        <div className="header__center">
          <div className="header__discount">
            <button>1 day discount</button>
          </div>
          <nav className="header__nav">
            <ul>
              <li>Main Page</li>
              <li>Categories</li>
              <li>All products</li>
              <li>All sales</li>
            </ul>
          </nav>
          </div>
        

        <div className="header__right">
          <div className="header__like">
            <a href="#">
              <img src={like} alt="Название компании" />
            </a>
          </div>
          <div className="header__cart">
            <a href="#">
              <img src={card} alt="Название компании" />
            </a>  
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;