import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"


const TIL = ({ data }) => {
  const { frontmatter, body, fields } = data
  return (
    <>
      <Link to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <p>{frontmatter.rarity}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {frontmatter.categories.map((category, idx) => {
        return <div key={idx}>{category}</div>
      })}
    </>
  )
}

export default TIL
