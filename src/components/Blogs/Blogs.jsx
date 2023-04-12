import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Blogs = () => {
  const questions = useLoaderData();
  console.log(questions);
  return (
    <div className=''>
      <Banner>Blogs</Banner>
      <div className='category-container flex flex-col gap-3'>
        {
          questions.map(singleQuestion => <Question
          key={singleQuestion.id}
          singleQuestion={singleQuestion}
          ></Question>)
        }
      </div>
    </div>
  );
};

export default Blogs;