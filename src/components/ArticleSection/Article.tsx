import React from 'react'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <ArticleSection>
        <div className="container">
            <h1 className="article_title">Latest Articles</h1>
            <div className="articleCards_wrapper">
                <ArticleCard />
            </div>
        </div>
    </ArticleSection>
  )
}

const ArticleSection = styled.article`
    
`

export default Article