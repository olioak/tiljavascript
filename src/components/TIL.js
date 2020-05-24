import React, { useState } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  background: ${p => p.theme.palette.gray[200]};
  border-radius: ${p => p.theme.borderRadius.md};
  overflow: hidden; /* clip the border radius */
  margin-bottom: ${p => p.theme.spacing[8]};
  box-shadow: ${p => p.theme.boxShadow.md};
`

const Title = styled.h1`
  text-transform: uppercase;
  padding: ${p => p.theme.spacing[4]};
  background: ${p => p.theme.palette.yellow[400]};
  font-size: ${p => p.theme.fontSize.xl};
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.palette.gray[800]};
  text-decoration: none;
`

const Body = styled.div``

// Hack to pad markdown.
const FixedMarkdown = styled.div`
  & p {
    padding-left: ${p => p.theme.spacing[4]};
    padding-right: ${p => p.theme.spacing[4]};
  }
`

const RarityTag = styled.span`
  ${props => {
    const { palette, spacing, borderRadius, fontSize } = props.theme
    let bg = palette.blue[400]
    let color = palette.blue[800]

    if (props.rarity === "rare") {
      bg = palette.orange[400]
      color = palette.orange[800]
    }

    return css`
      background-color: ${bg};
      color: ${color};
      padding: 0 ${spacing[2]};
      margin: ${spacing[4]};
      margin-right: ${spacing[1]};
      border-radius: ${borderRadius.lg};
      display: inline-block;
      font-size: ${fontSize.sm};
    `
  }}
`

const Tag = styled.div`
  ${({ theme: { palette, spacing, borderRadius, fontSize } }) => css`
    background-color: ${palette.white};
    border: 1px solid ${palette.gray[400]};
    color: ${palette.gray[800]};
    padding: 0 ${spacing[2]};
    margin: ${spacing[1]};
    border-radius: ${borderRadius.lg};

    font-size: ${fontSize.sm};
  `}
`

const ReferencesContainer = styled.div`
  padding: ${p => p.theme.spacing[4]};
`

const ReferencesToggle = styled.button`
  color: ${p => p.theme.palette.blue[600]};
  background-color: ${p => p.theme.palette.gray[200]};
  text-align: right;
  border: none;
  flex: 1;
  padding: 0 ${p => p.theme.spacing[2]};
  &:focus {
    outline: none; /* not happy with this (a11y), but not sure how to improve it*/    
  }
`

const TagsAndToggle = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing[2]};
`

const Chevron = styled.span`
  ${props => {
    const rotation = props.open ? "90deg" : "180deg"
    return css`
      transform: rotate(${rotation});
      display: inline-block;
      cursor: pointer;
      padding: ${p => p.theme.spacing[1]};
    `
  }}
`

const TIL = ({ data }) => {
  const { frontmatter, body, fields } = data
  const [showReferences, setShowReferences] = useState(false)

  const toggle = () => setShowReferences(prev => !prev)

  return (
    <Wrapper>
      <Title>
        <StyledLink to={fields.slug}>{frontmatter.title}</StyledLink>
      </Title>
      <Body>
        <FixedMarkdown>
          <MDXRenderer>{body}</MDXRenderer>
        </FixedMarkdown>

        <TagsAndToggle>
          <RarityTag rarity={frontmatter.rarity}>
            {frontmatter.rarity}
          </RarityTag>
          {frontmatter.categories.map((category, idx) => {
            return <Tag key={idx}>{category}</Tag>
          })}

          <ReferencesToggle onClick={toggle}>
            <span>references</span>
            <Chevron open={showReferences}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </Chevron>
          </ReferencesToggle>
        </TagsAndToggle>
        {showReferences && (
          <ReferencesContainer>
            {frontmatter.references.map((ref, idx) => {
              return (
                <div key={idx}>
                  {ref.split(":")[0]} - {ref.split(":")[1]}
                </div>
              )
            })}
          </ReferencesContainer>
        )}
      </Body>
    </Wrapper>
  )
}

export default TIL
