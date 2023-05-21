import React from 'react'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'

import currency from '../../assets/image-currency.jpg'
import restaurant from '../../assets/image-restaurant.jpg'
import plane from '../../assets/image-plane.jpg'
import confetti from '../../assets/image-confetti.jpg'

const Article = () => {
  return (
    <ArticleSection id='blog'>
        <div className="container">
            <h1 className="article_title">Latest Articles</h1>
            <div className="articleCards_wrapper">
                <ArticleCard 
                  image={currency}
                  subTitle= "By Claire Robinson"
                  title= "Recieve money in any currency with no fees"
                  text= "The world is getting smaller and we're getting mobile. So why should you be focused to only recieve money in a single... "
                />
                <ArticleCard 
                  image={restaurant}
                  subTitle= "By Willson Hutton"
                  title= "Treat yourself without worrying about money"
                  text= "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you... "
                />
                <ArticleCard 
                  image={plane}
                  subTitle= "By Claire Robinson"
                  title= "Take your Easybank card wherever you go"
                  text= "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We'll even show you... "
                />
                <ArticleCard 
                  image={confetti}
                  subTitle= "By Willson Hutton"
                  title= "Our-invites only Beta accounts are now live"
                  text= "After alot of hard work by the whole team, we're exited to launch our closed beta. It's easy to request an invite through the site... "
                />
            </div>
        </div>
    </ArticleSection>
  )
}

const ArticleSection = styled.article`
margin: 2rem 0;

.article_title {
  font-size: 3rem;
}

  .articleCards_wrapper {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2rem;
    margin: 5rem 0;
  }


@media only screen and (max-width:1280px) {
.articleCards_wrapper {
    grid-template-columns: repeat(3, auto);
}
}

@media only screen and (max-width: 960px) {
.articleCards_wrapper {
    grid-template-columns: repeat(2, auto);
}
}

@media only screen and (max-width: 768px) {
.article_title {
  font-size: 2rem;
  text-align: center;
}

.articleCards_wrapper {
    grid-template-columns: 100%;
}
}




`

export default Article