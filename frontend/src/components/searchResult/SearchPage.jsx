import React from 'react';
import Footer from '../Footer/Footer';
import TopNavbar from '../TopNavbar/TopNavbar';
import ResultItem from './ResultItem';

function SearchPage() {
  return (
    <div className="main-wrapper bg-gray-200">
      <TopNavbar />
      <div className="main-container max-w-6xl mx-auto my-0">
        <ResultItem />
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
