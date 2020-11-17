import * as React from 'react';
import styled from 'styled-components';

type Props = {
}

const FComponent: React.FCX<Props> = props => {
  return <div className={ props.className }>
      This is a Functional Component
  </div>
}

export default styled(FComponent)`
`;
