import React from 'react';
import NavbarTours from './tours/NavbarTours';
import FooterTop from './tours/FooterTop';
import FooterBottom from './tours/FooterBottom';
import SearchInfo from './tours/SearchInfo';
import ToursHome from './tours/ToursHome';
import ToursAdvance from './tours/ToursAdvance';
import PopularTourism from './tours/PopularTourism';
import ToursViewed from './tours/ToursViewed';

import { useGlobalContext } from '../context';

const Tours = () => {
  const { tourViewed, setTourViewed } = useGlobalContext();

  const handleClick = (item) => {
    const tourFound = tourViewed.find(tour => tour.id === item.id);

    if (tourFound) {
      setTourViewed(tourViewed.map(tour => tour.id === item.id && item))
    } else {
      setTourViewed([...tourViewed, item])
    }
  }

  const handleClose = (id) => {
    const tourClear = tourViewed.filter(tour => tour.id !== id);

    setTourViewed(tourClear)
  }
  return (
    <>
      <NavbarTours />
      <SearchInfo />
      <div style={{ backgroundColor: '#ecf0f5' }}>
        <ToursViewed tourViewed={tourViewed} close={handleClose} />
        <ToursHome clickToursHome={handleClick} />
        <ToursAdvance clickToursAdvance={handleClick} />
        <PopularTourism />
      </div>
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>

  );
};

export default Tours;