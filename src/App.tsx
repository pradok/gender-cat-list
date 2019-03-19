import React, { Component } from 'react';
import styled from 'styled-components';

import {AlphabeticalList} from './cats';

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
AppStyled.displayName = 'AppStyled';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <AlphabeticalList />
      </AppStyled>
    );
  }
}

export default App;
