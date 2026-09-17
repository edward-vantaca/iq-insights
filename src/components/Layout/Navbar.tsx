import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faChevronDown } from '@fortawesome/pro-regular-svg-icons'
import BrandLight from '../../assets/vantaca-iq-light.png'
import BrandDark from '../../assets/vantaca-iq-dark.png'
import { useClient } from '../../context/ClientContext'

type Props = {
  toggleMobileNav: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ toggleMobileNav, darkMode, toggleDarkMode }: Props) {
  const { clients, client, setClientId } = useClient()

  return (
    <nav className="relative z-20 border-b border-color-hr bg-color-card shadow-iq-navbar print:hidden">
      <div className="mx-auto sm:px-6 lg:px-8 lg:pl-6">
        <div className="relative flex h-16 flex-row justify-between gap-4">
          {/* Mobile hamburger */}
          <div className="flex w-16 items-center justify-center border-r border-color-hr sm:hidden">
            <a
              className="cursor-pointer text-color-h2"
              onClick={() => toggleMobileNav(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <span className="light-only mr-3 inline-block">
                <img src={BrandLight} alt="Vantaca IQ" className="h-auto w-[124px]" />
              </span>
              <span className="dark-only mr-3 inline-block">
                <img src={BrandDark} alt="Vantaca IQ" className="h-auto w-[124px]" />
              </span>
            </Link>
          </div>

          {/* Right: client switcher + dark mode toggle + user avatar */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-4 sm:static sm:inset-auto sm:pr-4">
            {/* Client switcher. Prototype only -- a real deployment scopes the
                page to the signed-in customer, it does not let them pick. */}
            <Menu as="div" className="relative hidden sm:block">
              <Menu.Button className="flex items-center gap-2 rounded border border-color-border px-2.5 py-1 text-xs font-medium text-color-h2 transition-colors hover:border-color-h2">
                <span className="max-w-[190px] truncate">{client.name}</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-2.5 w-2.5 text-color-p" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-30 mt-2 w-72 origin-top-right overflow-hidden rounded-md border border-color-hr bg-color-card py-1 shadow-lg focus:outline-none">
                  <p className="px-3 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-[.08em] text-color-muted2">
                    Prototype client
                  </p>
                  {clients.map((c) => (
                    <Menu.Item key={c.id}>
                      {({ active }) => (
                        <button
                          onClick={() => setClientId(c.id)}
                          className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm ${
                            active ? 'bg-color-stage' : ''
                          } ${c.id === client.id ? 'font-semibold text-color-h1' : 'text-color-h2'}`}
                        >
                          <span className="truncate">{c.name}</span>
                          <span className="flex-shrink-0 text-[10px] uppercase tracking-[.06em] text-color-muted2">
                            {c.insights.join(' · ')}
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              onClick={toggleDarkMode}
              className="flex h-8 w-8 items-center justify-center rounded-full text-color-h2 hover:bg-color-stage"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="h-4 w-4" />
            </button>
            <Menu as="div" className="relative">
              <Menu.Button className="flex rounded-full bg-color-card text-sm focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-color-active">
                  <span className="text-sm font-medium leading-none text-white">
                    EC
                  </span>
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-color-card py-1 shadow-lg focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`block w-full px-4 py-2 text-left text-sm font-semibold text-color-h2 hover:font-bold ${active ? 'bg-color-stage' : ''}`}
                      >
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}
