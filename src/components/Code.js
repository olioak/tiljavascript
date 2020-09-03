import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import styled from "styled-components";
import { copyToClipboard } from "../utils/copyToCliboard";

// TODO: Put them inside the theme
export const Pre = styled.pre`
  overflow-x: auto;
  position: relative;
  margin-bottom: 0;
  font-size: 16px;
  overflow: visible;
  border-top: 1px dashed ${p=> p.theme.palette.gray[400]};
  border-bottom: 1px dashed ${p=> p.theme.palette.gray[400]};
  border-radius: 0;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 16px;
  top: -15px;  
  background: ${p=> p.theme.palette.gray[300]};
  color: ${p=> p.theme.palette.gray[700]};
  border: 1px solid ${p=> p.theme.palette.gray[400]};
  border-radius: 4px;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    background: ${p=> p.theme.palette.gray[200]};
  }
`;

const Code = ({ codeString, language }) => {
  const handleClick = () => {
    copyToClipboard(codeString);
  };

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
  );
};

export default Code;
