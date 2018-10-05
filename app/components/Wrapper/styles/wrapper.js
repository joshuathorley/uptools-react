import styled from "styled-components";

const wrapper = styled.div`
  margin: ${props => props.top || 0}px auto ${props => props.bottom || 0}px auto;
  padding: 0px ${props => (props.largePadding ? 50 : 20)}px;
  width: 100%;
  max-width: 1060px;

  @media (max-width: 768px) {
    padding: 0px 20px !important;
  }
`;

export default wrapper;
