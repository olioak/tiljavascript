import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const Title = styled.h1`
  padding: ${p => p.theme.spacing[12]} ${p => p.theme.spacing[12]};
  color: ${p => p.theme.palette.gray[800]};
  font-family: ${p => p.theme.fontFamily.sans};
  font-size: ${p => p.theme.fontSize["2xl"]};
  
  line-height: 2rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 30px;

  b {
    text-decoration: underline dashed ${p => p.theme.palette.blue[400]};
  }
`;

const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled(Link)`
  display: block;
  box-shadow: ${p => p.theme.boxShadow.default};
  padding: ${p => p.theme.spacing[2]} ${p => p.theme.spacing[6]};
  font-size: ${p => p.theme.fontSize["2xl"]};
  color: ${p => p.theme.palette.gray[100]};
  background: ${p => p.theme.palette.blue[500]};
  border-radius: 4px;
  margin-bottom: 32px;
  text-decoration: none;
`;
const Body = styled.main`
  display: flex;
  flex-direction: column;
`;

// TODO: fix layout to work when content bigger than screen.
const Contact = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${p => p.theme.palette.gray[100]};
  padding: ${p => p.theme.spacing[3]};  
  a {
    color: ${p => p.theme.palette.blue[700]};
    text-decoration: none;
  }
`;

const Divider = styled.span`
  color: ${p => p.theme.palette.blue[500]};
  margin-left: ${p => p.theme.spacing[2]};
  margin-right: ${p => p.theme.spacing[2]};
`;

const BeginnerPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Body>
        <Card>
          <Title>
            Learn JavaScript <b>from scratch</b> with <b>tweet sized</b> lessons
          </Title>
          <StartContainer>
            <Start to="/beginner">Start</Start>
          </StartContainer>
        </Card>

        <Contact>
          <a href="https://www.github.com/olioak/jsfighter">github</a>
          <Divider>•</Divider>
          <a href="https://www.twitter.com/olioak42">twitter</a>
          <Divider>•</Divider>
          <a href="mailto:olioak42@gmail.com">olioak42@gmail.com</a>
        </Contact>
      </Body>
    </Layout>
  );
};

export default BeginnerPage;