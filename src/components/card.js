import styled from "styled-components";

const Card = styled.div`
  background: ${p => p.theme.palette.gray[100]};
  border-radius: ${p => p.theme.borderRadius.md};
  overflow: hidden; /* clip the border radius */
  margin-bottom: ${p => p.theme.spacing[8]};
  box-shadow: ${p => p.theme.boxShadow.md};
`;

export default Card;
