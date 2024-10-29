import { ArrowRightIcon, ArrowLeftIcon, EllipsisVertical, UserIcon, CogIcon, LayoutDashboard, LoaderCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';
import DasmoIcon from '@/assets/dasmo-icon.png';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggler';
import { useGetUserQuery, useLogoutMutation } from '@/services/authApi';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';
// This sidebar component is for both mobile and desktop
function Sidebar({ children, expanded, setExpanded }: any) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          credentials: "include",
          headers: {
            'Accept': 'application/json',
            'Referer': 'https://127.0.0.1:5173/',
          },

        })
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    // fetchData();
  }, [])
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logout().unwrap(); // Call the logout mutation
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  return (
    <div className="relative">
      <div
        className={`fixed inset-0 -z-10 block  ${expanded ? 'block sm:hidden' : 'hidden'}`}
      />
      <aside
        className={`box-border h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
      >
        <nav className="flex h-full flex-col border-r  shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src={DasmoIcon}
              className={`overflow-hidden transition-all ${expanded ? 'w-20' : 'w-0'
                }`}
              alt=""
            />
            {expanded && <span className='text-sm font-bold'>Dasmo Routing System</span>}
            <div className={`${expanded ? '' : 'hidden sm:block'}`}>
              <Button
                size='sm'
                variant='outline'
                onClick={() => setExpanded((curr: boolean) => !curr)}
              >
                {!expanded ? (
                  <ArrowRightIcon className="size-5" />
                ) : (
                  <ArrowLeftIcon className="size-5" />
                )}
              </Button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="flex border-t p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
              alt=""
              className="h-10 w-10 rounded-md"
            />
            {
              // isLoading ? <LoaderCircleIcon className='animate-spin' /> :
              //     <div
              //       className={`
              //     flex items-center justify-between
              //     overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}
              // `}
              //     >
              //       <div className="leading-4">
              //         <h4 className="font-semibold">{data?.firstName + ' ' + data?.lastName}</h4>
              //         <span className="text-xs">{data?.email}</span>
              //       </div>
              //       <DropdownMenu>
              //         <DropdownMenuTrigger asChild>
              //           <EllipsisVertical className="h-4 w-4" />
              //         </DropdownMenuTrigger>
              //         <DropdownMenuContent align="end">
              //           <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              //         </DropdownMenuContent>
              //       </DropdownMenu>
              //     </div>
            }

          </div>
        </nav>
      </aside>
    </div>
  );
}

export default function MakeSidebar() {
  const [expanded, setExpanded] = useState(true);
  const navBarItems = [
    {
      icon: <LayoutDashboard />,
      text: 'Dashboard',
      active: true,
    },
    {
      icon: <UserIcon />,
      subMenu: [
        {
          icon: <UserIcon />,
          text: 'Profile',
        },
        {
          icon: <CogIcon />,
          text: 'Settings',
        },
      ],
      text: 'Profile',
    },
    {
      icon: <CogIcon />,
      text: 'Settings',
    },
  ];

  // Desktop Sidebar
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      {navBarItems.map((item, index) => (
        <SidebarItem key={index} expanded={expanded} {...item} />
      ))}
      <div className='fixed right-5 top-3'>
        <ModeToggle />
      </div>
    </Sidebar>
  );
}