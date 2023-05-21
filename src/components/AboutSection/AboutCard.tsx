import { ReactNode } from "react"
import styled from "styled-components"


interface Props {
    image: string;
    title: string;
    text: string;
}

const AboutCard = ({image, title, text}: Props) => {
  return (
    <AboutCards>
        <div className="card_wrapper">
            <img src={image} alt="img" className="card_img" />
            <h2 className="card_title">{title}</h2>
            <p className="card_text">{text}</p>
        </div>
    </AboutCards>
  )
}

const AboutCards = styled.div`
    margin-top: 3rem;
    width: 100%;
    max-width: 270px;
    margin: auto;

.card_wrapper .card_img {
    max-width: 70px;
}

.card_wrapper .card_img,
.card_wrapper .card_title {
    margin-bottom: 1.3rem;
}

/* Media queries */
@media only screen and (max-width:960px) {
    text-align: center;
}

@media only screen and (max-width:768px) {
        max-width: 350px;
}



@media(max-width: 500px) {
.card_wrapper .card_img {
    max-width: 50px;
    margin-bottom: 1rem;
}
}

`

export default AboutCard