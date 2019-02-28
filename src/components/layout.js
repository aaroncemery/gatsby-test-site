import React from 'react'
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 960px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;

  div {
    padding: 20px;
  }

`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {
          regex: "/dinasaur-masacare/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 200 : 300 }}
          to={{ height: location.pathname === '/' ? 300 : 200 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>

        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
        <footer>
      © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">{data.site.siteMetadata.description}</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
