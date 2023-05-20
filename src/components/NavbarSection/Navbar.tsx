import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from 'react-scroll'
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import { GrMenu,GrClose } from 'react-icons/gr'

const Navbar = () => {

const[shadow, setShadow] = useState(false);

const navShadow = () => {
  if(window.scrollY > 30) {
    setShadow(true);
  } else {
    setShadow(false);
  };
};

useEffect(() => {
  window.addEventListener('scroll', navShadow);
});

const[toggle, setToggle] = useState(false);

const handleToggle = () => {
  setToggle(!toggle);
};

  return (
    <NavbarSection className={shadow ? "sticky" : undefined}>
        <div className="container">
            <div className="nav_wrapper">
              <Link to="hero">
                <Logo />
              </Link>
              <ul className={toggle ? "nav_menu active" : "nav_menu"}>
                <li className="nav_link">
                  <Link to="hero" onClick={handleToggle}>Home</Link>
                </li>
                <li className="nav_link">
                  <Link to="about" onClick={handleToggle}>About</Link>
                </li>
                <li className="nav_link">
                  <Link to="contact" onClick={handleToggle}>Contact</Link>
                </li>
                <li className="nav_link">
                  <Link to="blog" onClick={handleToggle}>Blog</Link>
                </li>
                <Button clicked={handleToggle} text="Request Invite"/>
              </ul>
              <div className="menu_btn" onClick={handleToggle}>
                {toggle ? <GrClose /> : <GrMenu />}
              </div>
            </div>
        </div>
    </NavbarSection>
  )
}

const NavbarSection = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: auto;
padding: 1rem 0;
background-color: var(--white);
transition: var(--transition);
z-index: 1000;

&.sticky {
  box-shadow: var(--box-shadow);
}

.nav_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav_menu {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.nav_menu .nav_link{
  margin: 0 1.4rem;
}

.nav_menu .nav_link a{
  color: var(--textColor);
  position: relative;
  transition: var(--transition);
}

.nav_menu .nav_link a::before{
  content: "";
  position: absolute;
  top: 44px;
  left: 0;
  width: 0;
  height: 3px;
  background: rgb(35,236,89);
  background: linear-gradient(114deg, rgba(35,236,89,1) 0%, rgba(20,230,143,1) 30%, rgba(13,221,171,1) 49%, rgba(0,212,255,1) 99%);
  transition: var(--transition);
}

.nav_menu .nav_link:nth-child(3) a::before {
  width: 0;
}

.nav_menu .nav_link:nth-child(4) a::before {
  width: 0;
}

.nav_menu .nav_link a:hover{
  color: var(--black);
}

.nav_menu .nav_link a:hover::before{
  color: var(--black);
  width: 55px;
}

.nav_menu .nav_link:nth-child(3) a:hover::before {
  width: 70px;
}

.nav_menu .nav_link:nth-child(4) a:hover::before {
  width: 40px;
}

.nav_menu button{
  margin-left: 18rem;
}

.menu_btn {
  display: none;
  font-size: 1.5rem;
}

@media only screen and (max-width:1280px) {
  .nav_menu button{
  margin-left: 0;
}
}

@media only screen and (max-width:960px) {
  z-index: 1;
.menu_btn {
  display: block;
}

.nav_wrapper .nav_menu {
  background-color: var(--white);
  display: inline-block;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  width: 90%;
  height: max-content;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  z-index: 999;
}

.nav_wrapper .nav_menu.active {
  top: 80px;
}

.nav_menu .nav_link {
  margin: 2rem 0;
  padding: 0 .8rem;
}

.nav_menu button{
  margin-bottom: 2rem;
}

.nav_menu .nav_link a::before{
  top: 30px;
}

.nav_menu button{
  margin-left: 0;
}
}
`
export default Navbar