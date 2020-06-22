import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  Option,
  OptionsContainer,
  UserPhoto,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    {currentUser && currentUser.photoURL ? (
      <Link to="/">
        <UserPhoto alt="userPhoto" src={currentUser.photoURL} />
      </Link>
    ) : null}
    <OptionsContainer>
      <Option as={Link} to="/shop">
        SHOP
      </Option>
      <Option as={Link} to="/shop">
        CONTACT
      </Option>
      {currentUser ? (
        <Option onClick={() => auth.signOut()}>SIGN OUT</Option>
      ) : (
        <Option as={Link} to="/signin">
          SIGN IN
        </Option>
      )}
      <CartIcon />
      {hidden ? null : <Cart />}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
