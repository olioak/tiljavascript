/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import theme from "./theme"
import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.main`
  font-family: Montserrat, Georgia;
  font-size: ${p => p.theme.fontSize.base};
  line-height: 1.5;
  color: ${p => p.theme.palette.gray[800]};
  margin: 0 auto;
  max-width: ${props => props.theme.screens.md};
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
