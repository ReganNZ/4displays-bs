import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'

export default function Template ({ data }) {
  const { markdownRemark: faq } = data
  return (
    <div>
      <Helmet title={`${faq.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <Container>
        <h1 className='display-3'>{faq.frontmatter.title}</h1>
      </Container>
      <Container dangerouslySetInnerHTML={{ __html: faq.html }} />
    </div>
  )
}

export const faqPageQuery = graphql`
  query FaqPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
