import { Link } from "react-scroll"
import Logo from "../../assets/logo.svg"
import styled from "styled-components"
import { 
    GrFacebook, 
    GrYoutube, GrTwitter, 
    GrPinterest, 
    GrInstagram
    } from "react-icons/gr"


const Footer = () => {

const getYear = () => {
    return new Date().getFullYear();
} 

  return (
    <FooterSection>
        <div className="container">
            <Link to="/" className="footer_logo">
                <img src={Logo} alt="logo" />
            </Link>
            <div className="footer_wrapper">
                <div className="footer_socials">
                    <div className="footer_socials-icon">
                        <Link to="/">
                            <GrFacebook />
                        </Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to="/">
                            <GrYoutube />
                        </Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to="/">
                            <GrTwitter />
                        </Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to="/">
                            <GrPinterest />
                        </Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to="/">
                            <GrInstagram />
                        </Link>
                    </div>
                </div>
                <ul className="footer_links">
                    <li className="footer_link">
                        <Link to="about">About Us</Link>
                    </li>
                    <li className="footer_link">
                        <Link to="contact">Contact</Link>
                    </li>
                    <li className="footer_link">
                        <Link to="blog">Blog</Link>
                    </li>
                </ul>
                <ul className="footer_links">
                    <li className="footer_link">
                        <Link to="/">Careers</Link>
                    </li>
                    <li className="footer_link">
                        <Link to="/">Support</Link>
                    </li>
                    <li className="footer_link">
                        <Link to="/">Privacy Policy</Link>
                    </li>
                </ul>
                <div className="footer_copyright">
                    <button>Request Invite</button>
                    <p>&copy; Easybank {getYear()}.All Rights Reserved</p>
                </div>
            </div>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.div`
background-color: var(--footerBg);

.footer_logo {
    margin-top: 3rem;
    position: relative;
    top: 50px;
    background-color: var(--white);
    padding: .8rem;
    img {
        width: 150px;
    }
}

    .footer_wrapper {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 5rem;
        padding: 3rem 0;
        align-items: flex-end;
    }

    .footer_wrapper .footer_socials {
        display: inline-flex;
    }

    .footer_wrapper .footer_socials .footer_socials-icon a {
        color: var(--white);
        font-size: 1.2rem;
        margin-right: 1rem;
        transition: var(--transition);
    }

    .footer_wrapper .footer_socials .footer_socials-icon a:hover {
        color: rgb(35,236,89);
    }

    .footer_wrapper .footer_links {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }

    .footer_wrapper .footer_links .footer_link  {
        color: var(--textColor);
        margin-bottom: 1rem;
        transition: var(--transition);
    }

    .footer_wrapper .footer_links .footer_link:hover a {
        color: rgb(35,236,89);
    }

    .footer_wrapper .footer_copyright button {
        margin-bottom: 2rem;
    }

@media only screen and (max-width:960px) {
    .footer_wrapper {
        grid-template-columns: repeat(3, auto);
    }
}

@media only screen and (max-width:768px) {
    .footer_wrapper {
        grid-template-columns: repeat(2, auto);
    }
}

@media only screen and (max-width:500px) {
    .footer_wrapper {
        grid-template-columns: 100%;
        grid-gap: 2rem;
        margin-top: 4rem;
    }
}





`


export default Footer