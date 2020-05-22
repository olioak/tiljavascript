import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  background: #2c2c2c;
  margin-bottom: 32px;
  text-align: center;
  padding: 32px;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <StyledLink to="/">
        <h1>{siteTitle}</h1>
      </StyledLink>
    </Inner>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
