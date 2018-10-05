import styled from 'styled-components';

const paragraph = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  line-height: 24px;
  padding: 0;
  margin: ${props => props.top || 0}px 0 ${props => props.bottom || 0}px 0;
  ${props => props.small && `
    font-size: 16px;
    line-height: 24px;
  `}

  ${props => props.large && `
    font-size: 24px;
    line-height: 32px;
  `}
`;

export default paragraph;
