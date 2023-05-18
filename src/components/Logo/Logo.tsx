import styled from 'styled-components';
import LogoImg from '../../assets/logo.svg';

const Logo = ({...rest}) => {
    return (
        <LogoStyles {...rest}>
            <img src={ LogoImg } alt="logo" />
        </LogoStyles> 
    )
}

const LogoStyles = styled.div`
    max-width: 180px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
}

@media only screen and (max-width:500px) {
    max-width: 100px;
}

`;

export default Logo;