import React from 'react';
import Todos from './components/Todos';
function App() {
  return (
    <div>
      <Todos items={['Learn ts', 'Learn React in ts', 'E-commerce Website']} />
    </div>
  );
}

export default App;
