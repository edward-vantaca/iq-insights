import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGripVertical,
  faCalendarDays,
  faArrowsRotate,
  faCircleInfo,
  faStar,
  faChevronDown,
  faSliders,
  faShareFromSquare,
  faPrint,
} from '@fortawesome/pro-regular-svg-icons'

const WIDGETS = [
  'Action Item Activity',
  'Invoice Overview',
  'Service Request Overview',
  'Action Items Completed',
]

function WidgetCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-color-hr bg-color-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-color-hr px-4 py-3">
        <FontAwesomeIcon icon={faGripVertical} className="h-3.5 w-3.5 cursor-grab text-color-muted3" />
        <span className="flex-1 text-sm font-semibold text-color-h1">{title}</span>
        <div className="flex items-center gap-1">
          <button className="rounded p-1.5 text-color-muted2 hover:bg-color-stage hover:text-color-h2">
            <FontAwesomeIcon icon={faCalendarDays} className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1.5 text-color-muted2 hover:bg-color-stage hover:text-color-h2">
            <FontAwesomeIcon icon={faArrowsRotate} className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1.5 text-color-muted2 hover:bg-color-stage hover:text-color-h2">
            <FontAwesomeIcon icon={faCircleInfo} className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-color-cell" style={{ minHeight: 240 }}>
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-color-hr border-t-color-active" />
      </div>
    </div>
  )
}

function DatePill({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-color-hr bg-color-card px-3 py-2 text-sm text-color-h2 shadow-sm">
      <FontAwesomeIcon icon={faCalendarDays} className="h-3.5 w-3.5 text-color-active" />
      {date}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div>
      {/* Full-bleed page header — breaks out of container padding */}
      <div className="-mx-4 -mt-4 mb-6 sm:-mx-4 sm:-mt-4 md:-mx-6 md:-mt-6 lg:-mx-8 lg:-mt-8">
        <div className="flex items-center gap-3 border-b border-color-hr bg-color-card px-6 py-3">

          {/* Left: title + actions */}
          <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-color-favorite" />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-color-h1">East Coast Metrics</span>
            <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-color-muted2" />
          </div>

          <div className="mx-1 h-4 w-px bg-color-hr" />

          <button className="rounded p-1.5 text-color-muted2 hover:bg-color-stage hover:text-color-h2">
            <FontAwesomeIcon icon={faSliders} className="h-3.5 w-3.5" />
          </button>

          <button className="flex items-center gap-1.5 rounded-lg border border-color-hr px-3 py-1.5 text-sm text-color-h2 hover:border-color-stage-border hover:bg-color-stage">
            <FontAwesomeIcon icon={faShareFromSquare} className="h-3.5 w-3.5" />
            Share
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-color-hr px-3 py-1.5 text-sm text-color-h2 hover:border-color-stage-border hover:bg-color-stage">
            <FontAwesomeIcon icon={faPrint} className="h-3.5 w-3.5" />
            Print
          </button>

          <div className="flex-1" />

          {/* Right: date range */}
          <div className="flex items-center gap-2">
            <DatePill date="September 4, 2026" />
            <span className="text-sm text-color-muted2">to</span>
            <DatePill date="September 11, 2026" />
            <button className="rounded-lg border border-color-hr bg-color-card p-2 shadow-sm hover:bg-color-stage">
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-color-muted2" />
            </button>
          </div>
        </div>
      </div>

      {/* Widget grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {WIDGETS.map((title) => (
          <WidgetCard key={title} title={title} />
        ))}
      </div>
    </div>
  )
}
