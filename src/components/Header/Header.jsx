import React, { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import {
  Bars3BottomRightIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='job-container'>
      <div className='header relative flex justify-between items-center'>
        <Link to='/'>
          <div className='flex gap-2 justify-center items-center'>
            <BriefcaseIcon className="h-10 w-10 text-blue-700" />
            <p className='text-2xl md:text-4xl font-extrabold'>Job Provider</p>
          </div>
        </Link>
        <div className=''>
          <ul className='hidden md:flex gap-5 items-center'>
            <li>
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/statistics'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to='/applied'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to='/blogs'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white'>Start Apply</button>
        </div>


        <div className='md:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-6 h-6 text-gray-600' />
          </button>
          {
            isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div onClick={() => setIsMenuOpen(false)}>
                      <Link to='/' className='inline-flex items-center'>
                        <BriefcaseIcon className="h-5 w-5 text-blue-700" />
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Job Provider
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link to='/' className='font-bold'
                          onClick={() => { setIsMenuOpen(false) }}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/statistics'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/applied'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;