import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  const categoriesLoader = async () => {
    const res = await fetch('category.json');
    const data = await res.json();
    return data.category;
  };

  useEffect(() => {
    const loadCategories = async () => {
      const categoryData = await categoriesLoader();
      setCategories(categoryData);
    };
    loadCategories();
  }, []);

  return (
    <div className='category-container'>
      <div className='text-center'>
        <p className='text-3xl font-semibold pt-8 md:pt-14 pb-4'>Job Category List</p>
        <p className='text-xs'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-7'>
        {
          categories.map((category, index) => <JobCategory
          key={index}
          category={category}
          ></JobCategory>)
        }
      </div>
    </div>
  );
};

export default JobCategories;




