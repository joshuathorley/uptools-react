import React, { Children } from 'react';

import StyledWrapper from './styles/wrapper';

const Wrapper = (props) => (
  <StyledWrapper {...props}>
    {Children.toArray(props.children)}
  </StyledWrapper>
);

export default Wrapper;
