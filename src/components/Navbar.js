import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/img/sweat.svg';

const navigation = [
  { name: 'Workouts', href: '#', current: true },
  { name: 'Exercises', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='absolute w-full'>
      {({ open }) => (
        <>
          <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                <div className='inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
                  <div className='flex flex-shrink-0 items-center'>
                    <img
                      className='block w-auto lg:hidden'
                      src={logo}
                      alt='Sweat As'
                    />
                    <img
                      className='hidden w-auto lg:block'
                      src={logo}
                      alt='Sweat AsS'
                    />
                  </div>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4 2xl:text-sm xl:text-xs lg:text-xs md:text-[0.60rem] text-[8px] font-medium xl:mr-20 mr-20'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md '
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md'>
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <Disclosure.Panel className='relative sm:hidden bg-gray-900 z-10'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
