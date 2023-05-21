import styled from "styled-components"
import AboutCard from './AboutCard'

import online from '../../assets/icon-online.svg'
import budgeting from '../../assets/icon-budgeting.svg'
import onboarding from '../../assets/icon-onboarding.svg'
import api from '../../assets/icon-api.svg'

const About = () => {
  return (
    <AboutSection id="about">
        <div className="container">
            <div className="about_wrapper">
                <div className="about_info">
                    <h1 className="about_info-title">Why Choose Easybank?</h1>
                    <p className="about_info-text">
                        We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className="aboutCard_wrapper">
                    <AboutCard 
                        image= {online}
                        title="Online Banking"
                        text="Our modern web and mobile applications allows you to keep track of your finances wherever you are in the world."
                    />
                    <AboutCard 
                        image= {budgeting}
                        title="Simple Budgeting"
                        text="See exactly where your money goes each month. Recieve notification when you're close to hitting your limit."
                    />
                    <AboutCard 
                        image= {onboarding}
                        title="Fast Onboarding"
                        text="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
                    />
                    <AboutCard 
                        image= {api}
                        title="Open API"
                        text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                    />
                </div>
            </div>
        </div>
    </AboutSection>
  )
}

const AboutSection = styled.div`
position: relative;
    background-color: #F4F5F7;
    bottom: 254px;
    z-index: -999;
    height: 100%;

.about_wrapper {
    padding: 10% 0;
}

.about_wrapper .about_info {
    max-width: 600px;
}

.about_wrapper .about_info .about_info-title {
    margin-bottom: 1.2rem;
}

.about_wrapper .about_info .about_info-text {
    line-height: 1.5rem;
}

.about_wrapper .aboutCard_wrapper {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2rem;
    margin-top: 5rem;
}

@media only screen and (max-width:1280px) {
    bottom: 0;
.about_wrapper .aboutCard_wrapper {
    grid-template-columns: repeat(3, auto);
}
}

@media only screen and (max-width:960px) {
margin-top: 4rem;

.about_wrapper .about_info {
    max-width: 90%;
    margin: auto;
    text-align: center;
}

.about_wrapper .aboutCard_wrapper {
    grid-template-columns: repeat(2, auto);
    margin-top: 3rem;
}
}

@media only screen and (max-width:768px) {
.about_wrapper .aboutCard_wrapper {
    grid-template-columns: 100%;
    margin-top: 3rem;
}
}


@media only screen and (max-width:500px) {
.about_wrapper .about_info .about_info-title {
    font-size: 2rem;
}
}
`

export default About