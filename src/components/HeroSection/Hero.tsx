import styled from 'styled-components'
import heroBg from '../../assets/bg-intro-desktop.svg'
import heroMobileBg from '../../assets/bg-intro-mobile.svg'
import heroImg from '../../assets/image-mockups.png'

const Hero = () => {
  return (
    <HeroSection id='hero'>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_info">
            <h1 className="hero_info-title">Next generation digital banking</h1>
            <p className="hero_info-text">
              Take your financial life online. Your Easybank account will be one-stop-shop for spending, saving, budgeting, investing and much more.
            </p>
            <button>Request Invite</button>
          </div>
          <div className="hero_img">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

const HeroSection = styled.div `
  position: relative;
  width: 100%;
  z-index: -1;
  overflow-x: hidden;

&::before {
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 27%;
  left: 40%;
  z-index: -1;
}

  .hero_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

.hero_wrapper .hero_info {
  max-width: 400px;
}

.hero_wrapper .hero_info .hero_info-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero_wrapper .hero_info .hero_info-text {
  line-height: 1.5rem;
  margin-bottom: 3rem;
}

  .hero_wrapper .hero_img {
    position: relative;
    left: 22%;
  }

@media only screen and (max-width:1280px) {
  .hero_wrapper .hero_img {
    left: 17%;
  }
}

@media only screen and (max-width:960px) {
  &::before {
  background-image: url(${heroBg});
  bottom: 27%;
  left: 10%;
}

  .hero_wrapper {
    flex-direction: column-reverse;
  }

.hero_wrapper .hero_info {
  margin-top: 1rem;
  max-width: 500px;
  text-align: center;
}

  .hero_wrapper .hero_img {
    position: relative;
    left: 0;
    top: 90%;
  }
}

@media only screen and (max-width:500px) {
  &::before {
  background-image: url(${heroMobileBg});
  background-size: contain;
  bottom: -30px;
  left: 0;
}

.hero_wrapper .hero_info {
  max-width: 100%;
}

.hero_wrapper .hero_info .hero_info-title {
  font-size: 2rem;
}

.hero_wrapper .hero_info .hero_info-text {
  margin-bottom: 2rem;
}


}




`





export default Hero