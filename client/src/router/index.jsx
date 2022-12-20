import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../components/Home'
import StudentList from '../components/StudentList'
import EditStudent from '../components/EditStudent'

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/student',
      element: <StudentList />,
      children:[]
    },
    {
      path: '/:type/:id',
      element: <EditStudent />
    }
  ])
}
export default Router