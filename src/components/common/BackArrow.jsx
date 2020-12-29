import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const BackArrow = () => {
  return (
    <IconContext.Provider value={{ size: '40', style: { marginLeft: '150px', color: '#14213d' } }}>
      <Link style={{ textDecoration: 'none' }} to="/">
        <BsArrowLeft className="back-button" />
      </Link>
    </IconContext.Provider>
  );
};

export default BackArrow;
