import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  background: ${p => p.theme.palette.gray[800]};
  margin-bottom: ${p => p.theme.spacing[8]};
  padding-left: ${p => p.theme.spacing[8]};
  box-shadow: ${p => p.theme.boxShadow.md};
  letter-spacing: 0.45em;
  border-bottom: 8px solid ${p => p.theme.palette.yellow[400]};
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.screens.md};
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.palette.yellow[400]};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${p => p.theme.palette.yellow[300]};
  }
`

const Title = styled.h1`
  font-size: ${p => p.theme.fontSize["3xl"]};
  margin: 0;
  padding: 16px;
`

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Inner>
        <StyledLink to="/">
          <Title>{siteTitle}</Title>
        </StyledLink>
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
