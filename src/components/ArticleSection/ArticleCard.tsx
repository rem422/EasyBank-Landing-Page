import styled from 'styled-components'



interface Props {
  image: string,
  subTitle: string,
  title: string,
  text: string
}

const ArticleCard = ({image, subTitle, title, text}: Props) => {
  return (
    <Card>
      <div className="card_wrapper">
        <img src={image} alt="img" className="card_img" />
        <span className="card_subtitle">{subTitle}</span>
        <h2 className="card_title">{title}</h2>
        <p className="card_text">{text}</p>
      </div>
    </Card>
  )
}

const Card = styled.div`
    margin-top: 3rem;
    height: auto;
    width: 100%;
    max-width: 100%;
    margin: auto;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    overflow: hidden;

.card_wrapper .card_img {
  height:200px;
  margin-bottom: 2.2rem;
}

.card_wrapper .card_subtitle,
.card_wrapper .card_title,
.card_wrapper .card_text {
  padding: 1rem 1.2rem 0 1.2rem;
  transition: var(--transition);
}

&:hover .card_wrapper .card_title {
  color: rgb(35,236,89);
}

.card_wrapper .card_text {
  padding-bottom: 1.5rem;
}

@media only screen and (max-width: 768px) {
  max-width: 90%;
}

@media only screen and (max-width: 500px) {
  max-width: 100%;
}
`

export default ArticleCard