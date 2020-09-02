import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  background: ${p => p.theme.palette.gray[800]};
  margin-bottom: ${p => p.theme.spacing[8]};
  padding-left: ${p => p.theme.spacing[8]};
  box-shadow: ${p => p.theme.boxShadow.md};
  letter-spacing: 0.45em;
  border-bottom: 8px solid ${p => p.theme.palette.yellow[400]};
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.screens.md};
  display: flex;
  align-items: center;
`;

const Home = styled(Link)`
  color: ${p => p.theme.palette.yellow[400]};
`;

const StyledLink = styled(Link)`
  color: ${p => p.theme.palette.yellow[400]};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${p => p.theme.palette.yellow[300]};
  }
`;

const Title = styled.h1`
  font-size: ${p => p.theme.fontSize["3xl"]};
  margin: 0;
  padding: ${p => p.theme.spacing[4]};
`;

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Inner>
        <Home to="/">
          <HomeIcon />
        </Home>
        <StyledLink to="/">
          <Title>{siteTitle}</Title>
        </StyledLink>
      </Inner>
    </Wrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const HomeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    >
      <path d="M9 23h-6v-10l8.991-8.005 9.009 8.005v10h-6v-3c0-1.654-1.355-3.021-3.009-3.021-1.655 0-2.991 1.367-2.991 3.021v3zm2.252-11.015c.094-.002 1.385-.002 1.477 0 1.17.016 1.264-.998 2.259-.998.643 0 .995.524.999.999.005.474-.28.825-.622.995.327.177.619.527.622 1.002.003.475-.347.999-.999.999-.995 0-1.089-1.015-2.259-.998h-1.477c-1.17-.017-1.264.998-2.259.998-.652 0-1.002-.524-.999-.999.003-.475.295-.825.622-1.002-.342-.17-.627-.521-.622-.995.004-.475.356-.999.999-.999.995 0 1.089 1.014 2.259.998zm.748-10.985l12 10.632-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.481 12-10.644z" />
    </svg>
  );
};
