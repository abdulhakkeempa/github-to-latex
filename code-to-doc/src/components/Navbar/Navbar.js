import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-5 md:px-10 bg-neutral-900 ">
      <div className="hidden lg:block flex items-center flex-shrink-0 text-white mr-6">
        <a className="font-semibold text-2xl tracking-tight" href="/">code2doc</a>
      </div>
      <div className="block w-full block flex-grow flex items-center justify-end w-auto">
        <div className="text-base lg:flex-grow lg:flex lg:justify-end lg:space-x-7">
          <div className='flex gap-x-3 items-center justify-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className=''>
              <img src='https://avatars.githubusercontent.com/u/92361680?v=4' width='50' height='50' className='rounded-full'/>
            </div>
            <div  className='cursor-pointer'>
              <h1 className='text-base text-white'>Abdul Hakkeem P A</h1>
              {isOpen && (
                <div className='absolute right-0 mt-10 mr-2 lg:mr-7 py-2 w-48 bg-indigo-950 rounded-lg shadow-xl text-white'> 
                  <a href="/dashboard" className='transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-purple-500 hover:text-gray '>Dashboard</a>
                  <a href="#" className='transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-purple-500 hover:text-gray '>Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
