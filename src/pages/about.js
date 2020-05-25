import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <main>
        <p>I can be reached through one of these ways:</p>
        <span>
          <a href="https://github.com/olioak">github</a>, or
          <a href="https://twitter.com/olioak42">@olioak42</a> or
          olioak42@gmail.com.
        </span>
      </main>
    </Layout>
  )
}

export default AboutPage
