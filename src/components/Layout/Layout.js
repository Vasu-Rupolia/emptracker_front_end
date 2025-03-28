
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;

