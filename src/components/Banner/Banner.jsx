import React from 'react';

const Banner = ({children}) => {
  return (
    <div className='text-center bg-gradient-to-b from-indigo-50 to-gray-50 h-[15vh] md:h-[20vh] flex justify-center items-center'>
      <p className='font-bold text-lg'>{children}</p>
    </div>
  );
};

export default Banner;