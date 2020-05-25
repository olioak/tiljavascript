import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

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
  display: flex;
  align-items: center;
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
  padding: ${p => p.theme.spacing[4]};
`

// Something weird with this menu. The hot reload doesn't work.
const StyledMenu = styled(MenuButton)`
  display: flex;
  margin: 0 ${p => p.theme.spacing[4]};
  fill: ${p => p.theme.palette.yellow[400]};
  background: none;
  border: none;
`

const StyledMenuList = styled(MenuList)`
  margin-top: ${p => p.theme.spacing[3]};
  margin-left: ${p => p.theme.spacing[1]};
  padding: 0 ${p => p.theme.spacing[3]};
  background: ${p => p.theme.palette.yellow[400]};
  font-family: Montserrat;
`

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Inner>
        <Menu>
          <StyledMenu>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </StyledMenu>

          <StyledMenuList>
            <MenuLink as={Link} to="/">
              Home
            </MenuLink>
            <MenuLink as={Link} to="/about">
              About
            </MenuLink>
          </StyledMenuList>
        </Menu>

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
