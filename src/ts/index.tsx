import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import CComponent from 'components/CComponent';
import FComponent from 'components/FComponent';
import GlobalStyle from 'consts/GlobalStyle';

type State = {
};

class Root extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return <>
    <GlobalStyle />
    <StyledDiv>
        Hello, world!
    </StyledDiv>
    <FComponent className='functional-component' />
    <CComponent className='class-component' />
    </>
  }
}

const StyledDiv = styled.div`
`;

ReactDOM.render(
    <Root />,
    document.getElementById("root")
);
