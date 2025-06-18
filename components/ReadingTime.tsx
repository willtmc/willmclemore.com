import { Clock, Coffee, BookOpen } from 'lucide-react'

interface ReadingTimeProps {
  minutes: number
  words?: number
  className?: string
  showIcon?: boolean
  verbose?: boolean
}

export function ReadingTime({ 
  minutes, 
  words, 
  className = '', 
  showIcon = true,
  verbose = false 
}: ReadingTimeProps) {
  // Determine the icon and message based on reading time
  const getReadingInfo = () => {
    if (minutes < 1) {
      return {
        icon: BookOpen,
        message: 'Quick read',
        color: 'text-green-600 dark:text-green-400'
      }
    } else if (minutes <= 5) {
      return {
        icon: Clock,
        message: `${minutes} min read`,
        color: 'text-blue-600 dark:text-blue-400'
      }
    } else if (minutes <= 10) {
      return {
        icon: Coffee,
        message: `${minutes} min read`,
        color: 'text-orange-600 dark:text-orange-400'
      }
    } else {
      return {
        icon: Coffee,
        message: `${minutes} min read`,
        color: 'text-purple-600 dark:text-purple-400'
      }
    }
  }

  const { icon: Icon, message, color } = getReadingInfo()

  if (verbose && words) {
    return (
      <div className={`flex items-center gap-2 text-sm ${color} ${className}`}>
        {showIcon && <Icon className="w-4 h-4" />}
        <span>{message}</span>
        <span className="text-slate-500 dark:text-slate-400">•</span>
        <span className="text-slate-600 dark:text-slate-400">{words.toLocaleString()} words</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-1 text-sm ${color} ${className}`}>
      {showIcon && <Icon className="w-4 h-4" />}
      <span>{message}</span>
    </div>
  )
}

// Reading time badge component for compact display
export function ReadingTimeBadge({ minutes, className = '' }: { minutes: number; className?: string }) {
  const getBadgeColor = () => {
    if (minutes < 1) return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    if (minutes <= 5) return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    if (minutes <= 10) return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
    return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor()} ${className}`}>
      <Clock className="w-3 h-3" />
      {minutes < 1 ? 'Quick read' : `${minutes} min`}
    </span>
  )
}