import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='footer-container'>
        <div className='grid grid-cols-2 text-gray-400 md:grid-cols-6 pt-10 md:pt-25'>
          <div className='col-span-2 flex flex-col p-5 md:p-10'>
            <p className='font-bold'>Talent Sync</p>
            <p className='my-2 text-xs font-thin'>We hope you enjoy using TalentSync to find your dream job or the perfect candidate for your company!

</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Company</p>
            <p className='my-1 text-xs font-thin'>About Us</p>
            <p className='my-1 text-xs font-thin'>Work</p>
            <p className='my-1 text-xs font-thin'>Latest News</p>
            <p className='my-1 text-xs font-thin'>Careers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Product</p>
            <p className='my-1 text-xs font-thin'>Prototype</p>
            <p className='my-1 text-xs font-thin'>Plans & Pricing</p>
            <p className='my-1 text-xs font-thin'>Customers</p>
            <p className='my-1 text-xs font-thin'>Integrations</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Support</p>
            <p className='my-1 text-xs font-thin'>Help Desk</p>
            <p className='my-1 text-xs font-thin'>Sales</p>
            <p className='my-1 text-xs font-thin'>Become a Partner</p>
            <p className='my-1 text-xs font-thin'>Developers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Contact</p>
            <p className='my-1 text-xs font-thin'>524 Broadway , NYC</p>
            <p className='my-1 text-xs font-thin'>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="border-t border-gray-800 w-[95%] mx-auto"></div>
        <div className='text-gray-300 p-5 md:p-10 flex justify-between items-center'>
          <p className='text-[0.5rem]'>@2023 Talent Sync. All Rights Reserved</p>
          <p className='text-[0.5rem]'>Powered by Talent Sync</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;