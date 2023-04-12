import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import { jobDetailsLoader, jobsLoader } from './components/Utilities/Loader';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: jobsLoader
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignment.json')
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsLoader
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('/question.json')
      },
      {
        path: 'job-details/:id',
        element: <JobDetails applied={false}></JobDetails>,
        loader: ({params}) => jobDetailsLoader(params.id)
      },
      {
        path: 'applied/job-details/:jobId',
        element: <JobDetails applied={true}></JobDetails>,
        loader: ({params}) => jobDetailsLoader(params.jobId)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
