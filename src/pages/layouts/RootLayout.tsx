import { Outlet } from 'react-router-dom'
import MakeSidebar from './Sidebar'

export default function RootLayout() {
          return (


                    <div className='grid grid-cols-5'>
                              <MakeSidebar />
                              <div className='cols-span-4 my-2'>
                                        <Outlet />
                              </div>
                    </div>
          )
}
