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

      {frontmatter.references.map((ref, idx) => {
        return (
          <span key={idx}>
            {ref.split(":")[0]} - {ref.split(":")[1]}
          </span>
        )
      })}
    </>
  )
}

export default TIL
