import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

const Header = ({ siteTitle }) => {
  const theme = useContext(ThemeContext)
  const { palette, spacing, screens, fontSize } = theme

  const Wrapper = styled.header`
    background: ${palette.gray[800]};
    margin-bottom: ${spacing[8]};
    padding-top: ${spacing[2]};
    padding-bottom: ${spacing[2]};
    text-align: center;
  `

  const Inner = styled.div`
    margin: 0 auto;
    max-width: ${screens.sm};
  `

  const StyledLink = styled(Link)`
    color: ${palette.yellow[400]};
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: ${palette.gray[100]};
    }
  `

  const Title = styled.h1`
    font-size: ${fontSize["3xl"]};
    margin: 0;
    padding: 16px;
  `

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
