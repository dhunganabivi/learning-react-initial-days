import React from 'react'
import Home_page from './pages/home'
import About from './pages/about'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'

const App = () => {

  const router = createBrowserRouter ([
    {
      path: '/',
      element:<HomePage />
    },

    {
      path: 'about-page',
      element: <About />

    }
  ]);

  return <RouterProvider router= {router} />
}

export default App