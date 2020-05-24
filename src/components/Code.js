import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwlLight"
import styled from "styled-components"
import { copyToClipboard } from "../utils/copyToCliboard"

export const Pre = styled.pre`
  overflow-x: auto;
  position: relative;
  margin-bottom: 0;
`

const CopyCode = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  border: 0;
  background: #ebecf0;
  margin: 0;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`

const Code = ({ codeString, language }) => {
  const handleClick = () => {
    copyToClipboard(codeString)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default Code
