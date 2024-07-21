// src/components/layout/Layout.tsx
import React from 'react';
import Footer from './Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
