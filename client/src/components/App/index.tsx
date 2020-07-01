import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Button, Container } from '@material-ui/core';

const Wrapper = styled(Container)`
  height: 100%;
`;

const Block = styled(Grid)`
  height: 100%;
`;

const App = () => { 
  return (
    <Wrapper>
      <Block container spacing={1} justify={'center'} alignItems={'center'}>
        <Button variant="contained" color="primary">Press</Button>
      </Block>
    </Wrapper>
  );
}

export default App;
