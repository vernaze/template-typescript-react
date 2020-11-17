import React from 'react';
import styled from 'styled-components';

type Props = {
    className: string
  }
  
type State = {
};

class CComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <>
    <div className={ this.props.className }>
        CComponent
    </div>
    </>
  }
}

export default styled(CComponent)``;