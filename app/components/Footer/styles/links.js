import styled from 'styled-components';

const links = styled.ul`
  margin: 7px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;

  li {
    display: block;
    font-size: 16px;
    margin-right: 23px;

    a {
      font-weight: 400 !important;
      text-decoration: none;
      color: #5700FF;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export default links;
