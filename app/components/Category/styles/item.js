import styled from "styled-components";

const item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  line-height: 24px;
  justify-content: space-between;

  .text {
    flex: 1;
  }

  > img {
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    margin-right: 16px;
  }

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`;

export default item;
