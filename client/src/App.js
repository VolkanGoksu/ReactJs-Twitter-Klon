
import React from 'react'

import Container from './layout/Container'
import SideBar from './layout/SideBar'
import Content from './layout/Content'
import Widgets from './layout/Widgets'
function App() {
  return (
    <div className="App">
      <Container>
        <SideBar />
        <Content />
        <Widgets />
      </Container>
    </div>
  );
}

export default App;
