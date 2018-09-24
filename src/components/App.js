import React from 'react';
import Header from './Header';

const App = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      {children}
    </div>
  );
};

export default App;
