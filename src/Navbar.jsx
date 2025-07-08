import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // Ensure this toggles `dark` class on <html>

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <div className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600">Chart Online</div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">Home</a>
            <a href="/about" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">About</a>
            <a href="/services" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">Services</a>
            <a href="/contact" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">Contact</a>
            <ThemeToggle />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-40 bg-black/30 dark:bg-black/60" onClick={toggleMenu}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Chart Online</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo"
                  />
                </a>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                >
                  <span className="sr-only">Close menu</span>
                  <X size={24} />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                  <div className="space-y-2 py-6">
                    {['/', '/about', '/services', '/contact'].map((path, i) => (
                      <a
                        key={i}
                        href={path}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
