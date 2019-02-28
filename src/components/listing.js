import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Image from '../components/image'
import SEO from '../components/seo'

const LISTING_QUERY = graphql`
  query BlogPostListing {
      allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
      }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString:"MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  transition: box-shadow 0.225s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(25, 17, 34, 0.1);
  }

  h2 {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  p {
    font-size: 0.8rem;
    font-family: 'Helvetica';
  }

  .read-more {
    text-decoration: underline;
    font-size: 0.8rem;
    font-family: 'Helvetica';
    color: palevioletred;
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${ node.frontmatter.slug }`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${ node.frontmatter.slug }`}>Read More</Link>
        </Post>
      ))
    )}
  />

)

export default Listing
