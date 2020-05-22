import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"

const TIL = props => {
  const { frontmatter, body, fields } = props.data
  return (
    <>
      <Link to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <p>{frontmatter.rarity}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export default TIL
