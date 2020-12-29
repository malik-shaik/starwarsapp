import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <ClipLoader size={100} color={'#14213d'} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
