import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import gatsbyLogo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo src={gatsbyLogo} alt="Gatsby Logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: #fefefe;
  border-bottom: 1px solid #69676d;
  margin-bottom: 0;
  max-height: 80px;
  z-index: 1000;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: .45rem 1.0875rem;
`
const Logo = styled.img`
  max-width: 80px;
  margin-bottom: 0;
  filter: grayscale(80%) drop-shadow(0 4px 5px rgba(0,0,0,0.3));
  transition: filter .225s ease;
  &:hover {
    filter: grayscale(20%) drop-shadow(0 10px 5px rgba(0,0,0,0.3));
  }
`
