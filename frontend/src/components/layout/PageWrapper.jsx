import React from 'react';
import Header from '../Header';

const PageWrapper = ({ children }) => {
    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    );
};

export default PageWrapper;
