import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGauge,
  faChartMixed,
  faChartLine,
  faLightbulb,
  faListCheck,
  faLayerGroup,
  faDollarSign,
  faBuilding,
  faGlobe,
  faUserGroup,
  faHouseBuilding,
  faCreditCard,
  faBrain,
  faSliders,
  faLifeRing,
} from '@fortawesome/pro-regular-svg-icons'

type Props = {
  showMobileNav: boolean
  toggleMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

function NavItem({
  to,
  icon,
  label,
  badge,
  end,
  onClick,
}: {
  to: string
  icon: Parameters<typeof FontAwesomeIcon>[0]['icon']
  label: string
  badge?: string
  end?: boolean
  onClick: () => void
}) {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        title={label}
        onClick={onClick}
        className={({ isActive }) =>
          clsx(
            'flex flex-row items-center justify-start gap-2 rounded-md px-3 py-2 text-sm hover:bg-color-card-overlay',
            { active: isActive },
          )
        }
      >
        <span className="link-icon flex flex-row items-center justify-center text-color-h1 opacity-30">
          <FontAwesomeIcon className="h-4 w-4" icon={icon} />
        </span>
        <span className="link-text font-medium text-color-h2">{label}</span>
        {badge && (
          <span className="link-text ml-auto rounded border border-color-badge/40 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-color-badge">
            {badge}
          </span>
        )}
      </NavLink>
    </li>
  )
}

function SectionLabel({
  label,
  badge,
}: {
  label: string
  badge?: string
}) {
  return (
    <li className="px-3 pb-1 pt-4">
      <span className="link-text flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-color-p">
        {label}
        {badge && (
          <span className="rounded border border-color-badge/40 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-color-badge">
            {badge}
          </span>
        )}
      </span>
    </li>
  )
}

export default function NavPanel({ showMobileNav, toggleMobileNav }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const classes = [
    'nav-panel z-10 shadow-iq-sidebar print:hidden',
    isCollapsed ? 'collapsed' : '',
    showMobileNav ? 'show-mobile' : '',
  ].join(' ')

  const close = useCallback(() => toggleMobileNav(false), [toggleMobileNav])
  const toggleCollapse = useCallback(() => setIsCollapsed((c) => !c), [])

  return (
    <>
      {/* Mobile backdrop overlay */}
      <div
        onClick={close}
        className={clsx(
          'click-overlay fixed inset-0 z-10 hidden bg-color-overlay opacity-0',
          { 'show-mobile': showMobileNav },
        )}
      />

      <div className={classes}>
        {/* Mobile header */}
        <header className="flex h-16 flex-row items-center justify-between border-b border-color-hr pl-6 sm:hidden">
          <h2 className="flex-1 font-semibold text-color-h1">Menu</h2>
          <div className="flex h-full w-16 items-center justify-center border-l border-color-hr sm:hidden">
            <a
              className="flex h-full cursor-pointer flex-row items-center justify-center text-color-h2"
              onClick={close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </header>

        {/* Desktop collapse toggle */}
        <a
          onClick={toggleCollapse}
          className="absolute right-0 top-2 hidden h-6 w-6 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-color-hr bg-color-card text-color-h2 shadow-sm sm:flex"
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </a>

        {/* MY WORKSPACE */}
        <ul className="flex flex-col gap-1 px-5 pt-5 pb-2 sm:pt-10">
          <SectionLabel label="My Workspace" />
          <NavItem to="/" icon={faGauge} label="Dashboards" end onClick={close} />
          <NavItem to="/dynamic-reporting" icon={faChartMixed} label="Dynamic Reporting" onClick={close} />
        </ul>

        {/* INSIGHTS */}
        <ul className="flex flex-col gap-1 px-5 pb-2">
          <SectionLabel label="Insights" badge="Beta" />
          <NavItem to="/benchmarks" icon={faChartLine} label="Benchmarks" onClick={close} />
          <NavItem to="/derived-insights" icon={faLightbulb} label="Derived Insights" onClick={close} />
          <NavItem to="/action-items" icon={faListCheck} label="Action Items" onClick={close} />
          <NavItem to="/collections" icon={faLayerGroup} label="Collections" onClick={close} />
          <NavItem to="/pay" icon={faDollarSign} label="Pay" onClick={close} />
          <NavItem to="/company" icon={faBuilding} label="Company" onClick={close} />
        </ul>

        {/* CORE PLATFORM */}
        <ul className="flex flex-col gap-1 px-5 pb-2">
          <SectionLabel label="Core Platform" />
          <NavItem to="/business" icon={faGlobe} label="Business" onClick={close} />
          <NavItem to="/employees" icon={faUserGroup} label="Employees" onClick={close} />
          <NavItem to="/associations" icon={faHouseBuilding} label="Associations" onClick={close} />
          <NavItem to="/payments" icon={faCreditCard} label="Payments" onClick={close} />
          <NavItem to="/ask-iq" icon={faBrain} label="Ask IQ" badge="Beta" onClick={close} />
        </ul>

        {/* Settings & Help (with top divider) */}
        <ul className="relative flex flex-col gap-1 px-5 pt-4 pb-5 before:absolute before:top-0 before:left-5 before:h-[1px] before:w-[calc(100%-2.5rem)] before:bg-color-border before:content-['']">
          <NavItem to="/settings" icon={faSliders} label="Settings" onClick={close} />
          <NavItem to="/help" icon={faLifeRing} label="Help" onClick={close} />
        </ul>
      </div>
    </>
  )
}
