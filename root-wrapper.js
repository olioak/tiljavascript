import React from "react"
import { MDXProvider } from "@mdx-js/react"
// some issue with code file lowercase on netlify
// if the file is changed to lowercase "code" it'll blow up even after clean deploy
import Code from "./src/components/Code"

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      )
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
