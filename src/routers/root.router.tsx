import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/gate/Login'
import RootLayout from '@/pages/layouts/RootLayout'
import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
          {
                    path: "/",
                    element: <RootLayout />,
                    children: [{
                              index: true,
                              element: <Dashboard />
                    }],
          },
          {
                    path: "/login",
                    element: <Login />,

          }
])
